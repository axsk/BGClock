<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import Clocks from './lib/Clocks.svelte'

  function preventDefault(e){
    e.preventDefault();
}

function disableScroll(){
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
}
function enableScroll(){
    document.body.removeEventListener('touchmove', preventDefault);
}
disableScroll()
</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<main>

  <Clocks />

</main>

<style>
body, html {
  position: fixed;
}
</style>