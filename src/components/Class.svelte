<script>
  import { CLASSES } from "$lib";

  const { id } = $props();
</script>

<div
  class="draggable-class"
  draggable="true"
  ondragstart={() => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData(id, "");
  }}
>
  {CLASSES.find((val) => val.id === id).title}
</div>

<style>
  .draggable-class:nth-child(odd) {
    background-color: #eee;
  }
  .draggable-class {
    padding: 5px 0;
  }
</style>
