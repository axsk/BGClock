63 lines (51 sloc) 1.53 KB
<script>
    import Clock2 from './Clock2.svelte'
    import { writable } from 'svelte-local-storage-store'

    let clockids = [0,1,2]
    let clocks = []
    let paused = undefined

    const _config = {bronstein: 0, fischer: 0 , basetime: 10}

    let config = writable("config", _config);
   
    function clicked(i) {
        if (clocks.every((c) => c.isrunning() == false)) {
            clocks[i].start()
            paused = undefined            
        }
        else if (clocks[i].isrunning()) {
            clocks[i].stop()
            let current = (i+1)%clockids.length
            clocks[current].start()
        }
    }

    function pause() {
        if (paused === undefined) {  // not paused
            for (let i in clockids) {
                clocks[i].isrunning() && (paused = i)
                clocks[i].pause()
            }
        } else {  // resume
            clocks[paused].unpause()
            paused = undefined
        }
    }

    function reset() {
        for (let i in clockids) {
            clocks[i].reset()
        }
        paused = undefined
    }




</script>

Basis <input bind:value={$config.basetime} type="number">
bronstein <input bind:value={$config.bronstein} type="number">
fischer <input bind:value={$config.fischer} type="number">

{#each clockids as c, i}
<div class="box">
    <Clock2 
        on:click={() => clicked(i)}
        bind:this={clocks[i]}
        id = {i}
        config = {$config}
    />
</div>
{/each}
<button on:click={pause}>||</button>
<button on:click={reset}>0</button>

<style>
    .box {
        float: left;
        width: 45%;
    }
</style>