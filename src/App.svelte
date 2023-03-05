<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import Clocks from './lib/Clocks.svelte'
</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<main>

  <Clocks />

</main>

<style>
:global(html) {

}

:global(body) {
  overscroll-behavior: none;

}
</style>