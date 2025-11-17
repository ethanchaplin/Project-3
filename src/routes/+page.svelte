<script>
  import { CLASSES } from "$lib";
  import Class from "../components/Class.svelte";
  import Dropdown from "../components/Dropdown.svelte";
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
</script>

<nav></nav>
<div class="info">
  <div>
    <h1>Welcome, Ethan!</h1>
    <p>Cumulative GPA: <b>3.22</b></p>
    <p>Credits Taken: <b>119</b></p>
  </div>
  <div class="breakdown">
    <h1>Degree Completion</h1>
    <svg viewBox="0 0 100 100" width="200" height="200">
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
    </svg>
  </div>
</div>
<div class="courses">
  <div class="course-list">
    <h2>Required Courses</h2>
    {#each CLASSES as class_object}
      <div class="semester">
        <Dropdown text={"First Year"}>
          <Class id={"cs2023"}></Class>
          <Class id={"cs2023"}></Class>
          <Class id={"cs2023"}></Class>
          <Class id={"cs2023"}></Class>
        </Dropdown>
      </div>
    {/each}
  </div>
  <div class="semester-view">
    {#each semesters as semester}
      <SemesterCard {semester}></SemesterCard>
    {/each}
  </div>
</div>

<style>
  nav {
    background-color: red;
    height: 100px;
    filter: drop-shadow(2px 2px 4px #00000088);
    position: sticky;
    top: 0px;
  }
  .info {
    height: 300px;
    border-bottom: 3px solid #444444;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
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
  .course-list {
    width: 350px;
    padding-left: 2rem;
    border-right: 3px solid #444444;
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
