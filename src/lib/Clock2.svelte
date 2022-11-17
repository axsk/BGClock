<script>
  import { writable } from 'svelte-local-storage-store'
  
  export let id = 0
  
  // config
  export let config = {basetime: 5, fischer: 5, bronstein:5}
  // oneway extraction
  $: ({basetime, fischer, bronstein} = config);
  
  // we cant access the extracted vars basetime, ..., since they are still #undef when this is run
  const _state = {seconds: config.basetime, running: false, bronstein: config.bronstein, checkpoint: 0, }
  let state = writable("clockstate-"+id, _state);
  
  // twoway extraction
  //let {state.seconds, state.running, state.bronstein} = $state
  //$: $state = {state.seconds, state.running, state.bronstein};
  
  let _str
  
  setInterval(update, 100)
  
  export function isrunning() {return $state.running}
  
  function update() {
    if ($state.running) {
      let now = Date.now()
      let passed = (now - $state.checkpoint) / 1000
      $state.checkpoint = now
      
      if ($state.bronstein - passed > 0) {
        $state.bronstein -= passed
      } else {
        $state.seconds -= passed - $state.bronstein
        $state.bronstein = 0
      }
      
      _str = print()
    }
    
  }
  
  export function start() {
    unpause()
    $state.bronstein = bronstein
  }
  
  export function stop() {
    pause()
    $state.seconds += fischer
  }
  
  export function pause() {
    $state.running=false
  }
  export function unpause() 
  {
    $state.checkpoint = Date.now()
    $state.running=true
  }
  
  function print() {
    let str = $state.seconds.toFixed(1)
    if ($state.bronstein > 0) {
      str = '(' + $state.bronstein.toFixed(1) + ')+' + str
    }
    return str
  }
  
  export function reset() {
    $state.seconds = config.basetime
    $state.running = false
    $state.bronstein = config.bronstein
    _str = print()
  }
  
</script>

<div id="square" on:click class="{$state.running ? 'running' : ''}">
  <input>
  <div class="time">{_str}</div>
</div>

<style>
  #square{
    width: 100%;
    padding: 0px;
    padding-top: 100%;
    position:relative;
    font-size: 200%;
  }
  
  .running{
    background: rgb(151, 205, 255);
  }
  
  .time{
    position: absolute;
    font-size: 3vw;
    top: 50%;
    width: 100%;
    text-align: center;
  }
  
  .total{
    position: absolute;
    right: 0%;
    bottom: 0%;
  }
  
  .moves{
    position: absolute;
    left: 0%;
    bottom: 0%;
  }
  
  .label{
    position:absolute;
    top:0%;
    width:100%;
    text-align: center;
  }
  
  
</style>