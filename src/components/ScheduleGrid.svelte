<script>
  import { CLASSES } from "$lib";

  export let courses = [];
  export let hide = () => {};
  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const START_HOUR = 8;
  const END_HOUR = 20;
  const START_MIN = START_HOUR * 60;
  const END_MIN = END_HOUR * 60;
  const RANGE_MIN = END_MIN - START_MIN;

  const hours = Array.from(
    { length: END_HOUR - START_HOUR + 1 },
    (_, i) => START_HOUR + i
  );

  // ---------------------------
  // Time helpers
  // ---------------------------
  function formatHour(h) {
    const label = h % 12 === 0 ? 12 : h % 12;
    const ampm = h < 12 ? "am" : "pm";
    return `${label}${ampm}`;
  }

  function timeToMinutes(t) {
    if (!t) return START_MIN;
    const [h = 0, m = 0] = String(t).split(":").map(Number);
    return h * 60 + m;
  }

  function overlaps(a, b) {
    const aStart = timeToMinutes(a.startTime);
    const aEnd = timeToMinutes(a.endTime);
    const bStart = timeToMinutes(b.startTime);
    const bEnd = timeToMinutes(b.endTime);
    return aStart < bEnd && bStart < aEnd;
  }

  // ---------------------------
  // Color for course
  // ---------------------------
  function hashStr(s) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h;
  }

  function getColorForCourse(courseId) {
    const h = hashStr(courseId) % 360;
    return `hsl(${h}, 65%, 55%)`;
  }

  // ---------------------------
  // Build section blocks
  // ---------------------------
  function buildSectionBlock(cls, sec) {
    return {
      courseId: cls.id,
      name: cls.title,
      sectionId: sec.id,
      days: Array.isArray(sec.days)
        ? sec.days
        : String(sec.days)
            .split(",")
            .map((d) => d.trim()),
      startTime: sec.start,
      endTime: sec.end,
      location: `${sec.building ?? ""} ${sec.room ?? ""}`.trim(),
      isHypothetical: true,
    };
  }

  function getAllSectionBlocks(list) {
    const blocks = [];
    for (const title of list) {
      const cls = CLASSES.find((c) => c.title === title);
      if (!cls) continue;
      for (const sec of cls.sections) {
        blocks.push(buildSectionBlock(cls, sec));
      }
    }
    return blocks;
  }

  // ---------------------------
  // State
  // ---------------------------
  let originalBlocks = [];
  let blocks = []; // Current visible blocks
  let selectedSections = {}; // { courseId: sectionId }

  function keyOf(b) {
    return `${b.courseId}-${b.sectionId}`;
  }

  // ---------------------------
  // Handle clicks
  // ---------------------------
  function onSelectHypo(chosen) {
    // 1) mark chosen as solid
    selectedSections[chosen.courseId] = chosen.sectionId;
    chosen.isHypothetical = false;

    // 2) remove other sections of same course + overlapping hypotheticals on the same day
    blocks = blocks.filter((b) => {
      // remove other sections of same course
      if (b.courseId === chosen.courseId && b.sectionId !== chosen.sectionId)
        return false;

      // only remove hypotheticals that overlap AND share at least one day with chosen
      if (
        b.isHypothetical &&
        b.days.some((d) => chosen.days.includes(d)) &&
        overlaps(b, chosen)
      )
        return false;

      return true;
    });
  }

  function onSolidClick(block) {
    // 1) Remove the block from selectedSections
    delete selectedSections[block.courseId];

    // 2) Remove the solid block itself
    blocks = blocks.filter(
      (b) => !(b.courseId === block.courseId && b.sectionId === block.sectionId)
    );

    // 3) Current solids after removal
    const currentSolids = blocks.filter((b) => !b.isHypothetical);

    // 4) Restore all sections of the unselected course as hypotheticals
    //    BUT filter out any that conflict with current solids
    const courseSections = originalBlocks
      .filter((ob) => ob.courseId === block.courseId)
      .filter(
        (ob) =>
          !currentSolids.some(
            (s) => s.days.some((d) => ob.days.includes(d)) && overlaps(ob, s)
          )
      )
      .map((c) => ({ ...c, isHypothetical: true }));

    // 5) Restore other courses’ sections that don’t conflict with current solids
    const otherSections = originalBlocks
      .filter((ob) => ob.courseId !== block.courseId)
      .filter(
        (ob) =>
          !currentSolids.some(
            (s) => s.days.some((d) => ob.days.includes(d)) && overlaps(ob, s)
          )
      )
      .map((c) => ({ ...c, isHypothetical: true }));

    // 6) Merge and deduplicate
    const newBlocks = [...blocks, ...courseSections, ...otherSections];
    const seen = new Set();
    blocks = newBlocks.filter((b) => {
      const k = keyOf(b);
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }

  // ---------------------------
  // Reactive: rebuild originalBlocks + blocks when courses change
  // ---------------------------
  $: if (courses) {
    originalBlocks = getAllSectionBlocks(courses);

    // Keep valid selectedSections
    const validSelections = {};
    for (const s of Object.keys(selectedSections)) {
      const secId = selectedSections[s];
      if (
        originalBlocks.some((b) => b.courseId === s && b.sectionId === secId)
      ) {
        validSelections[s] = secId;
      }
    }
    selectedSections = validSelections;

    // Initialize blocks if empty
    if (blocks.length === 0) {
      blocks = originalBlocks.map((b) => ({ ...b, isHypothetical: true }));
    }
  }

  // ---------------------------
  // Column layout (like Google Calendar)
  // ---------------------------
  function buildColumns(blocksForDay) {
    const sorted = [...blocksForDay].sort(
      (a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime)
    );

    const groups = [];
    for (const block of sorted) {
      const start = timeToMinutes(block.startTime);
      const end = timeToMinutes(block.endTime);

      let placed = false;
      for (const group of groups) {
        if (
          group.some(
            (g) =>
              start < timeToMinutes(g.endTime) &&
              timeToMinutes(g.startTime) < end
          )
        ) {
          group.push(block);
          placed = true;
          break;
        }
      }
      if (!placed) groups.push([block]);
    }

    const results = [];
    for (const group of groups) {
      const columns = [];
      for (const block of group) {
        let col = 0;
        while (true) {
          const colConflict = columns[col]?.some((other) =>
            overlaps(block, other)
          );
          if (!colConflict) break;
          col++;
        }
        if (!columns[col]) columns[col] = [];
        columns[col].push(block);

        results.push({ block, column: col, totalColumns: columns.length });
      }
    }

    return results;
  }

  $: dayBlocks = DAYS.reduce((map, d) => {
    const list = blocks.filter((b) => b.days.includes(d));
    map[d] = buildColumns(list);
    return map;
  }, {});

  function blockStyle(block) {
    const start = Math.max(START_MIN, timeToMinutes(block.startTime));
    const end = Math.min(END_MIN, timeToMinutes(block.endTime));
    const duration = Math.max(end - start, 15);
    const top = ((start - START_MIN) / RANGE_MIN) * 100;
    const height = (duration / RANGE_MIN) * 100;
    return `top:${top}%;height:${height}%;`;
  }

  function columnStyle({ column, totalColumns }) {
    const width = 100 / 5;
    const left = width * column;
    return `left:${left}%;width:${94}%;`;
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") hide();
    if (event.key === "Escape") hide();
  });
</script>

<div class="grid-container" tabindex="1" onclick={(ev) => ev.stopPropagation()}>
  <!-- Time column -->
  <div class="time-column">
    <div class="time-header"></div>
    {#each hours as h}
      <div class="time-label">{formatHour(h)}</div>
    {/each}
  </div>

  <!-- Days -->
  <div class="days-wrapper">
    <div class="days-header">
      {#each DAYS as d}
        <div class="day-header">{d}</div>
      {/each}
    </div>

    <div class="days-grid">
      {#each DAYS as day}
        <div class="day-column">
          {#each hours as _}
            <div class="hour-slot"></div>
          {/each}

          {#each dayBlocks[day] as entry (entry.block.courseId + "-" + entry.block.sectionId)}
            <div
              class="class-block {entry.block.isHypothetical
                ? 'hypo'
                : 'solid'}"
              style={blockStyle(entry.block) +
                columnStyle(entry) +
                `;background:${getColorForCourse(entry.block.courseId)}`}
              onclick={() =>
                entry.block.isHypothetical
                  ? onSelectHypo(entry.block)
                  : onSolidClick(entry.block)}
              tabindex="1"
              onkeydown={(ev) => {
                if (ev.key === "Enter") {
                  entry.block.isHypothetical
                    ? onSelectHypo(entry.block)
                    : onSolidClick(entry.block);
                }
                ev.stopPropagation();
              }}
            >
              <div class="class-name">
                {entry.block.name} (Sec {entry.block.sectionId})
              </div>
              <div class="class-meta">
                <span>{entry.block.location || "TBA"}</span>
                <span>{entry.block.startTime}–{entry.block.endTime}</span>
              </div>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .grid-container {
    display: flex;
    border-radius: 0.75rem;
    border: 1px solid #ddd;
    overflow: hidden;
    background: #fafafa;
    font-size: 0.8rem;
    height: 100%;
  }

  /* Time column */
  .time-column {
    width: 3.6rem;
    border-right: 1px solid #ddd;
    background: #f3f4f6;
    display: flex;
    flex-direction: column;
  }
  .time-header {
    height: 2rem;
    border-bottom: 1px solid #ddd;
    flex-shrink: 0;
  }
  .time-label {
    flex: 1; /* stretch evenly vertically */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: #555;
  }

  /* Days wrapper */
  .days-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  /* Days header */
  .days-header {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 5 days */
    background: #f3f4f6;
    border-bottom: 1px solid #ddd;
  }
  .day-header {
    text-align: center;
    padding: 0.45rem 0;
    font-weight: 600;
    font-size: 0.8rem;
  }

  /* Days grid */
  .days-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* evenly divide 5 days */
    flex: 1;
    height: 100%;
  }

  /* Each day column */
  .day-column {
    position: relative;
    border-left: 1px solid #eee;
    display: grid;
    grid-template-rows: repeat(11, 1fr); /* 11 hours from 8am to 6pm */
  }

  .day-column:first-child {
    border-left: none;
  }

  /* Hour slots evenly divide the column height */
  .hour-slot {
    border-bottom: 1px dashed #eee;
    width: 100%;
  }

  /* Blocks */
  .class-block {
    position: absolute;
    border-radius: 0.5rem;
    padding: 0.25rem 0.4rem;
    color: white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    width: 90%;
    min-width: 4%; /* avoid super-narrow width */
  }
  .class-block.hypo {
    width: 90%;
    opacity: 0.85;
    border: 2px dashed rgba(0, 0, 0, 0.18);
    filter: saturate(0.92) brightness(1.03);
  }
  .class-block.solid {
    border: 2px solid rgba(0, 0, 0, 0.25);
    opacity: 1;
  }

  /* Block text */
  .class-name {
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 0.1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .class-meta {
    font-size: 0.7rem;
    display: flex;
    justify-content: space-between;
    gap: 0.25rem;
    flex-wrap: wrap;
  }
</style>
