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
</script>

<nav></nav>

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
    stroke-dashoffset="113.1"
    transform="rotate(-90 50 50)"
  />
  <text x="50" y="50"> 66% </text>
</svg> -->
<div class="breakdown">
  <h1>Welcome, Ethan!</h1>
</div>
<div class="courses">
  <div class="course-list">
    <h2>Required Courses</h2>
    {#each CLASSES as class_object}
      <div class="semester">
        <Dropdown text={class_object.title}>
          <Class title={class_object.title}></Class>
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
  .breakdown {
    width: 100%;
    height: 300px;
    border-bottom: 3px solid #444444;
    padding: 1rem 2rem;
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
    background-color: #b2b2b2;
    width: calc(100vw - 350px);
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 15px;
    padding: 15px;
    overflow-y: scroll;
  }
</style>
