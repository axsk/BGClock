<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
<div style="position: absolute;width: 100%;height: 100%;left: 0;top: 0;">
    <div class="">
        Settings <input type=checkbox bind:checked={showsettings}>
        {#if showsettings}
         <div class="">
            
            Basis <input bind:value={$config.basetime} type="number">
            bronstein <input bind:value={$config.bronstein} type="number">
            fischer <input bind:value={$config.fischer} type="number">
            
            
            <button on:click={reset} class="w3-button">RESET</button>
        </div>
        {/if}
       
    </div>
    <button on:click={pause} class="w3-button w3-padding-large w3-light-grey w3-xxlarge" style="">||</button>
    <div style="position:absolute; width:100%; left:0">
        {#each clockids as i}
        <div class="watches">
            <div class="w3-sand w3-border w3-margin w3-round-large">
                <Clock 
                on:click={() => clicked(i)}
                bind:this={clocks[i]}
                id = {i}
                config = {$config}
                />
            </div>
        </div>
        {/each}
    </div>
</div>


<style>
    .watches {
        float: left;
        width:  50%;
    }

    input
    {
        background: transparent;
        border: none;
    }
</style>

<script>
    import Clock from './Clock.svelte'
    import { writable } from 'svelte-local-storage-store'
    
    let clockids = [0,1,4,2,3]
    let clocks = []
    let paused = undefined
    let showsettings = false;
    
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


