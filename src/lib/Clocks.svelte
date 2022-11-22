<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
<div style="position: absolute;width: 100%;height: 100%;left: 0;top: 0;">
    <div class="">
        Settings <input type=checkbox bind:checked={showsettings}>
        {#if showsettings}
         <div class="">
            
            Basis <input bind:value={$config.basetime} type="number">
            bronstein <input bind:value={$config.bronstein} type="number">
            fischer <input bind:value={$config.fischer} type="number">
            
            fixed order<input type=checkbox bind:checked={$config.ordered}> 
            <button on:click={reset} class="w3-button">RESET</button>
        </div>
        {/if}
       
    </div>
    <button on:click={pause} class="w3-button w3-padding-large w3-light-grey w3-xxlarge" style="">||</button>
    <button on:click={undo} class="w3-button">UNDO</button>
    <div style="position:absolute; width:100%; left:0">
        {#each clockids as i}
        
        {/each}
    </div>
    <div class=demo-container>
        <Grid bind:items let:item={item} let:dataItem {cols} fillSpace={true} rowHeight={600}>
            <div class="">
                <div class="w3-sand w3-border w3-margin w3-round-large">
                    <Clock 
                    on:click={() => clicked(dataItem.id)}
                    bind:this={clocks[dataItem.id]}
                    id = {dataItem.id}
                    config = {$config}
                    />
                </div>
            </div>
        </Grid>
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
    .demo-container {
        width: 100%;
        }
        .demo-widget {
        height: 100%;
        width: 100%;
        }
</style>

<script>
    import Grid from "svelte-grid";
    import gridHelp from "svelte-grid/build/helper/index.mjs";
    
    const COL=3
    let items = [0,1,4,2,3].map(function(id){
        return {
            [COL] : gridHelp.item({
                w: 1,
                h: 1,
                x: id,
                y: 0,
                resizable: false,
                id: id
                }),
            id: id
        }
    })

    let states = []
    const cols = [[1000, COL]];

    import Clock from './Clock.svelte'
    import { writable } from 'svelte-local-storage-store'
    
    let clockids = [0,1,4,2,3]
    let clocks = []
    let paused = undefined
    let showsettings = false;
    
    const _config = {players: 2, bronstein: 0, fischer: 0 , basetime: 10}
    
    let config = writable("config", _config);

    function undo() {
        if (states.length == 0) {return}
        let last = states.pop()
        for (let i in clocks) {
            clocks[i].setstate(last[i])
        }

    }
    function clicked(i) {
        states.push(
            structuredClone(clocks.map(c=>c.getstate())))
        console.log(states)

        if (clocks.every((c) => c.isrunning() == false)) {
            clocks[i].start()
            paused = undefined            
        }
        else if ($config.ordered && clocks[i].isrunning()) {
            clocks[i].stop()
            let current = (i+1)%clockids.length
            clocks[current].start()
        } else if (! $config.ordered && !clocks[i].isrunning()) {
            clocks.every((c) => c.start())
            //clocks[i].start()
            for (let i in clockids) {
                clocks[i].isrunning() && (clocks[i].stop())
            }
            clocks[i].start()
        } else if (! $config.ordered && clocks[i].isrunning()) {
            clocks[i].stop()
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


