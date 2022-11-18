



<script>
  import { writable } from 'svelte-local-storage-store'
  
  export let id = 0
  
  // config
  export let config = {basetime: 5, fischer: 5, bronstein:5}
  // oneway extraction
  $: ({basetime, fischer, bronstein} = config);
  
  // we cant access the extracted vars basetime, ..., since they are still #undef when this is run
  const _state = {
    seconds: config.basetime, 
    running: false, 
    bronstein: config.bronstein, 
    checkpoint: 0, 
    moves: 0,
    totaltime: 0,
    name: ""}

  /*
  how i would actually have liked to managed the state:
  export let totaltime, running, runbron  // these bind 2 way to the store below
  {seconds, running, bronstein, } = propstore(id, [def1, def2, ])
  $seconds = $seconds + 1
  // propstore now forwards the updates to the Component prop (totaltime, ...)
  */
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
      let passed = (now - $state.checkpoint) / 1000 // > 0
      $state.checkpoint = now
      $state.totaltime += passed
      
      if ($state.bronstein - passed > 0) {
        $state.bronstein -= passed
      } else {
        $state.seconds -= passed - $state.bronstein
        $state.bronstein = 0
      }
    }
    
  }
  
  export function start() {
    unpause()
    $state.bronstein = bronstein
  }
  
  export function stop() {
    pause()
    $state.seconds += fischer
    $state.moves += 1
  }
  
  export function pause() {
    update()
    $state.running=false
  }
  export function unpause() 
  {
    $state.checkpoint = Date.now()
    $state.running=true
  }
  
  function print() {
    let str = $state.seconds.toFixed(1)
    str=formattime($state.seconds)
    if ($state.bronstein > 0) {
      str = '(' + $state.bronstein.toFixed(1) + ')+' + str
    }
    return str
  }

  function formattime(time) {
    let str = ""
    if (time < 0) {str+="-"}
    time = Math.abs(time)
    let hour = Math.floor(time / (60*60))
    let mins = Math.floor((time / (60))%60)
    let sec = Math.floor(time % 60)
    let ms = Math.floor((time % 1)*10)
    if (hour > 0) {
      str += hour + ":"
      if (mins<10) {str += "0"}
    }
    
    

    if (mins > 0) {
      str += mins + ":"
      if (sec<10) {str += "0"}
    }
    str +=  sec
    
    //if (mins < 1) {str += "." + ms}
    return str
  }

  let print_bron = ""
  $: print_bron = formatbron($state.bronstein)
  function formatbron(bron) {
    if (bron > 0) {
      return "(" + formattime(bron) + ") "
    } else {return ""}
  }

  let averagetime
  $: averagetime = formattime($state.totaltime / $state.moves)
  
  export function reset() {
    $state.seconds = config.basetime
    $state.running = false
    $state.bronstein = config.bronstein
    $state.moves = 0
    $state.totaltime = 0  
    _str = print()
  }

  $: bronstr = formattime($state.bronstein)
  
</script>


<div id="square" on:click class="{$state.running ? 'running' : ''}" on:keydown>
  <input class="w3-input" bind:value={$state.name}>
  <div class="time">{formattime($state.seconds)}<div class="w3-text-gray">{#if $state.bronstein>0}{bronstr}{/if}</div></div>
  <div class="moves w3-padding-16">{averagetime}</div>
  <div class="total w3-padding-16">{formattime($state.totaltime)}</div>
  
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

  input
  {
      background: transparent;
      border: none;
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