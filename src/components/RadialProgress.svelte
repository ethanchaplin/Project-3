<script>
  /**
   * AI NOTE
   *
   * This component was originally written by humans,
   * but ChatGPT was used in the assistance of functionality
   * and creating functions and css stylings for radial calculations and rendering details.
   * The human provided the overall structure and design goals,
   * and it provided input and snippets on how to achieve that.
   */
  const {
    percent = 0,
    size = 88,
    progressColor = "#e00122",
    trackColor = "#1f1f1f",
    primary = "",
    secondary = "",
  } = $props();

  const bg = () =>
    `conic-gradient(${progressColor} 0% ${percent}%, ${trackColor} ${percent}% 100%)`;
  const holeSize = Math.max(0, size - 28);
  const primaryFont = () => `${Math.max(10, Math.round(size * 0.26))}px`;
  const secondaryFont = () => `${Math.max(8, Math.round(size * 0.16))}px`;
</script>

<div
  class="radial"
  aria-hidden="false"
  style={`width: ${size}px; height: ${size}px; background: ${bg()}`}
>
  <div class="hole" style={`width: ${holeSize}px; height: ${holeSize}px`}></div>
  {#if primary || secondary}
    <div class="center">
      {#if primary}
        <div class="primary" style={`font-size: ${primaryFont()}`}>
          {primary}
        </div>
      {/if}
      {#if secondary}
        <div class="secondary" style={`font-size: ${secondaryFont()}`}>
          {secondary}
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .radial {
    position: relative;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #111;
    box-shadow:
      0 2px 8px #00000055,
      inset 0 0 0 2px #ffffff22;
  }
  .hole {
    position: relative;
    z-index: 0;
    background: #ffffff;
    border-radius: 50%;
    border: 2px solid #f3f3f3;
    box-shadow: inset 0 1px 3px #00000022;
  }
  .center {
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.05;
    pointer-events: none;
  }
  .primary {
    font-weight: 800;
    color: #111;
  }
  .secondary {
    font-weight: 600;
    color: #555;
  }
</style>
