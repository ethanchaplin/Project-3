<script>
  import { CLASSES } from "$lib";

  const { title } = $props();
</script>

<div
  class="draggable-class"
  draggable="true"
  ondragstart={() => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData(
      CLASSES.find((val) => val.title === title).id,
      ""
    );
  }}
>
  {title}
</div>

<style>
</style>
