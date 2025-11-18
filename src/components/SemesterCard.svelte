<script>
  import { CLASSES } from "$lib";

  const { semester, listClass, showSchedule } = $props();
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
    const classObj = CLASSES.find((val) => val.id === classId);
    classes[idx] = classObj.title;
    prevNames[idx] = classObj.title;
    listClass(classObj.id);
  };
</script>

<div
  class="semester"
  tabindex="1"
  onkeydown={(event) => {
    if (event.key === "Enter") showSchedule(classes);
  }}
  onclick={() => showSchedule(classes)}
>
  <div class="title-credits">
    <h2>{semester}</h2>
    <p>
      Credits: <b
        >{classes
          .map((val) => {
            const cls = CLASSES.find((cls) => cls.title === val);
            if (cls !== undefined) {
              return cls.credits;
            }
            return 0;
          })
          .reduce((a, b) => a + b)}</b
      >
    </p>
  </div>
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
      onclick={(ev) => {
        ev.stopPropagation();
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
    cursor: pointer;
    h2 {
      padding: 10px;
    }
    p {
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
    text-align: center;
    text-overflow: ellipsis;
  }
  .title-credits {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
