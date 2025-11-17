<script>
  import { CLASSES } from "$lib";

  const { semester } = $props();
  let classes = $state(["", "", "", ""]);
  let prevNames = $state(["", "", "", ""]);
  const handleClassDrag = (event, idx) => {
    event.preventDefault();
    const classId = event.dataTransfer.types[0];
    const classTitle = CLASSES.find((val) => val.id === classId).title;
    classes[idx] = classTitle;
  };
  const handleClassLeave = (event, idx) => {
    event.preventDefault();
    classes[idx] = prevNames[idx];
  };
  const handleClassDrop = (event, idx) => {
    event.preventDefault();
    const classId = event.dataTransfer.types[0];
    const classTitle = CLASSES.find((val) => val.id === classId).title;
    classes[idx] = classTitle;
    prevNames[idx] = classTitle;
  };
</script>

<div class="semester">
  <h2>{semester}</h2>
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
</div>

<style>
  .semester {
    border-radius: 15px;
    height: 450px;
    background-color: white;
    display: flex;
    gap: 15px;
    align-items: center;
    flex-direction: column;
    h2 {
      padding: 10px;
    }
  }
  .semester-drag {
    width: 95%;
    height: 50px;
    background-color: #eeeeee;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
