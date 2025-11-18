<script>
  import { CLASSES } from "$lib";
  import Class from "../components/Class.svelte";
  import Dropdown from "../components/Dropdown.svelte";
  import ScheduleGrid from "../components/ScheduleGrid.svelte";
  import ScheduleView from "../components/ScheduleView.svelte";
  import SemesterCard from "../components/SemesterCard.svelte";
  const semesters = [
    "Spring 2021",
    "Summer 2021",
    "Fall 2021",
    "Spring 2022",
    "Summer 2022",
    "Fall 2022",
    "Spring 2023",
    "Summer 2023",
    "Fall 2023",
    "Spring 2024",
    "Summer 2024",
    "Fall 2024",
    "Spring 2025",
    "Summer 2025",
    "Fall 2025",
    "Spring 2026",
    "Summer 2026",
    "Fall 2026",
  ];
  const percentComplete = $state(75);
  const draggedClasses = $state([]);
  let scheduleViewClasses = $state([]);
  let showScheduleView = $state(false);
</script>

{#if showScheduleView}
  <div class="schedule-bg" onclick={() => (showScheduleView = false)}>
    <div class="schedule-popup">
      <ScheduleGrid
        courses={scheduleViewClasses}
        hide={() => (showScheduleView = false)}
      />
    </div>
  </div>
  <svg
    fill="#ffffff"
    height="25px"
    width="25px"
    version="1.1"
    class="close-popup"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 460.775 460.775"
    xml:space="preserve"
    onclick={() => (showScheduleView = false)}
    tabindex="1"
    onkeydown={(ev) => {
      if (ev.key === "Enter") showScheduleView = false;
    }}
  >
    <path
      d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
    />
  </svg>
{/if}
<nav></nav>
<div class="info">
  <h1>Welcome, Ethan!</h1>
  <p>Cumulative GPA: <b>3.22</b></p>
  <p>Credits Taken: <b>119</b></p>
  <!-- <svg viewBox="0 0 100 100" width="200" height="200">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#e6e6e6"
        stroke-width="10"
      />

      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="red"
        stroke-width="10"
        stroke-dasharray="282.74 282.74"
        stroke-dashoffset={282 - (282 * percentComplete) / 100}
        transform="rotate(-90 50 50)"
      />
      <text x="54" y="54" text-anchor="middle"> {percentComplete}% </text>
    </svg> -->
</div>
<div class="courses">
  <div class="course-list">
    <h2>Required Courses</h2>

    <div class="semester">
      <Dropdown text={"First Year"}>
        <div class="class-list">
          {#each CLASSES as class_object}
            {#if !draggedClasses.includes(class_object.id) && class_object.recYear === 1}
              <Class id={class_object.id} />
            {/if}
          {/each}
        </div>
      </Dropdown>
      <Dropdown text={"Second Year"}>
        <div class="class-list">
          {#each CLASSES as class_object}
            {#if !draggedClasses.includes(class_object.id) && class_object.recYear === 2}
              <Class id={class_object.id} />
            {/if}
          {/each}
        </div>
      </Dropdown>
      <Dropdown text={"Third Year"}>
        <div class="class-list">
          {#each CLASSES as class_object}
            {#if !draggedClasses.includes(class_object.id) && class_object.recYear === 3}
              <Class id={class_object.id} />
            {/if}
          {/each}
        </div>
      </Dropdown>
      <Dropdown text={"Fourth Year"}>
        <div class="class-list">
          {#each CLASSES as class_object}
            {#if !draggedClasses.includes(class_object.id) && class_object.recYear === 4}
              <Class id={class_object.id} />
            {/if}
          {/each}
        </div>
      </Dropdown>
      <Dropdown text={"Fifth Year"}>
        <div class="class-list">
          {#each CLASSES as class_object}
            {#if !draggedClasses.includes(class_object.id) && class_object.recYear === 5}
              <Class id={class_object.id} />
            {/if}
          {/each}
        </div>
      </Dropdown>
    </div>
  </div>
  <div class="semester-view">
    {#each semesters as semester}
      <SemesterCard
        {semester}
        listClass={(id) => {
          draggedClasses.push(id);
        }}
        showSchedule={(classes) => {
          scheduleViewClasses = classes;
          showScheduleView = true;
        }}
      ></SemesterCard>
    {/each}
  </div>
</div>

<style>
  nav {
    background-color: red;
    height: 100px;
    filter: drop-shadow(2px 2px 4px #00000088);
    position: sticky;
    z-index: 100;
    top: 0px;
  }
  .close-popup {
    position: fixed;
    top: 25px;
    left: 25px;
    z-index: 102;
  }
  .schedule-popup {
    width: 90%;
    height: 90%;
  }
  .schedule-bg {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0vh;
    left: 0vw;
    height: 100vh;
    width: 100vw;
    z-index: 101;
    background-color: #000000aa;
  }
  .info {
    height: auto;
    border-bottom: 3px solid #444444;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .breakdown {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  .courses {
    display: flex;
    width: 100%;
    height: calc(100vh - 100px);
  }
  .class-list {
    display: flex;
    flex-direction: column;
  }
  .course-list {
    width: 350px;
    padding-left: 2rem;
    border-right: 3px solid #444444;
  }
  .semester {
    height: 520px;
    overflow-y: scroll;
  }
  .semester-view {
    background-color: #d0d0d0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    gap: 15px;
    padding: 15px;
    overflow-y: scroll;
  }
</style>
