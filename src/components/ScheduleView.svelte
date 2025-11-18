<script>
  import CourseForm from "./CourseForm.svelte";
  import CourseList from "./CourseList.svelte";
  import ScheduleGrid from "./ScheduleGrid.svelte";

  let courses = [];
  let nextId = 1;

  function addCourse(course) {
    const newCourse = { ...course, id: nextId++ };
    courses = [...courses, newCourse];
  }

  function deleteCourse(id) {
    courses = courses.filter((c) => c.id !== id);
  }

  function detectConflicts(courses) {
    const conflicts = [];
    const byDay = {};

    for (const c of courses) {
      for (const day of c.days) {
        if (!byDay[day]) byDay[day] = [];
        byDay[day].push(c);
      }
    }

    function overlaps(a, b) {
      return a.startTime < b.endTime && b.startTime < a.endTime;
    }

    for (const day in byDay) {
      const list = byDay[day];
      for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
          if (overlaps(list[i], list[j])) {
            conflicts.push(
              `${day}: "${list[i].name}" overlaps with "${list[j].name}"`
            );
          }
        }
      }
    }
    return conflicts;
  }

  $: conflicts = detectConflicts(courses);
</script>

<main class="app">
  <section class="app-layout">
    <div class="right-panel">
      <section class="panel">
        <!-- Same courses array that drives the list -->
        <ScheduleGrid {courses} />
      </section>
    </div>
  </section>
</main>

<style>
  .app {
    height: 100%;
  }
  .app-header {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .app-header h1 {
    margin: 0;
    font-size: 1.8rem;
  }

  .app-header p {
    margin-top: 0.3rem;
    color: #555;
  }

  .app-layout {
    display: grid;
    grid-template-columns: minmax(0, 340px) minmax(0, 1fr);
    gap: 1rem;
  }

  .panel {
    padding: 0.9rem 1rem;
    border-radius: 0.75rem;
    background: white;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);
  }

  .left-panel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .right-panel {
    width: 95vw;
  }

  .panel h2 {
    margin: 0 0 0.6rem 0;
    font-size: 1rem;
  }

  .panel-warning {
    border: 1px solid #f97316;
  }

  .panel-warning h2 {
    color: #c2410c;
  }

  .panel-warning ul {
    padding-left: 1.1rem;
    margin: 0.3rem 0 0;
    font-size: 0.85rem;
  }
</style>
