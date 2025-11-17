<script>
  import { CLASSES } from "$lib";

  const { semester } = $props();
  let classes = $state(["", "", "", ""]);
  let prevNames = $state(["", "", "", ""]);
  const handleClassDrag = (event, idx) => {
    event.preventDefault();
    event.target.style.backgroundColor = "#eee";
    const classId = event.dataTransfer.types[0];
    const classTitle = CLASSES.find((val) => val.id === classId).title;
    classes[idx] = classTitle;
  };
  const handleClassLeave = (event, idx) => {
    event.preventDefault();
    event.target.style.backgroundColor = "";
    classes[idx] = prevNames[idx];
  };
  const handleClassDrop = (event, idx) => {
    event.preventDefault();
    event.target.style.backgroundColor = "";
    const classId = event.dataTransfer.types[0];
    const classTitle = CLASSES.find((val) => val.id === classId).title;
    classes[idx] = classTitle;
    prevNames[idx] = classTitle;
  };
</script>

<div class="semester">
  <h2>{semester}</h2>
  <div class="sem-classes">
    {#each classes as cls, i}
      <div
        class="semester-drag"
        ondragover={(ev) => handleClassDrag(ev, i)}
        ondragleave={(ev) => handleClassLeave(ev, i)}
        ondrop={(ev) => handleClassDrop(ev, i)}
      >
        {cls}
      </div>
    {/each}
    <div
      class="add-class"
      tabindex="1"
      onclick={() => {
        classes.push("");
      }}
      onkeydown={(event) => {
        if (event.key === "Enter") classes.push("");
      }}
    >
      Add Class
    </div>
  </div>
</div>

<style>
  .semester {
    height: 450px;
    border-radius: 15px;
    background-color: white;
    h2 {
      padding: 10px;
    }
  }
  .sem-classes {
    display: flex;
    background-color: white;
    height: 325px;
    gap: 15px;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
  }
  .semester-drag {
    width: 95%;
    height: 50px;
    min-height: 50px;
    background-color: #ccc;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .add-class {
    width: 95%;
    height: 50px;
    min-height: 50px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .add-class:hover {
    background-color: #ddd;
  }
  .add-class:active {
    background-color: #ccc;
  }
</style>
