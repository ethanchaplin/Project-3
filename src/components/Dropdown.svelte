<script>
  const { text, children } = $props();
  let active = $state(false);
</script>

<div class="dropdown">
  <div
    class="arrow-combo"
    onclick={() => (active = !active)}
    tabindex="1"
    onkeydown={(event) => {
      if (event.key === "Enter") active = !active;
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      transform={active ? "rotate(180 0 0)" : "rotate(90 0 0)"}
      ><path d="M24 22h-24l12-20z" />
    </svg>
    {text}
  </div>
  {#if active}
    <div class="child">
      {@render children?.()}
    </div>
  {/if}
</div>

<style>
  .dropdown {
    cursor: pointer;
  }
  .arrow-combo {
    display: flex;
    gap: 5px;
    align-items: center;
    svg {
      height: 10px;
      width: 10px;
    }
  }
  .child {
    margin-left: 30px;
  }
</style>
