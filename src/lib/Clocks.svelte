<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
<div style="position: absolute;width: 100%;height: 100%;left: 0;top: 0;">
    <div class="">
        Settings <input type=checkbox bind:checked={showsettings}><br>
        {#if showsettings}
         <div style="display:flex; flex-direction:column; width:20%; margin:auto; padding:20px">
            Players <input bind:value={$config.players} type="number">
            Basis <input bind:value={$config.basetime} type="number">
            Bronstein <input bind:value={$config.bronstein} type="number">
            Fischer <input bind:value={$config.fischer} type="number">
            <label  for="order">Clockwise</label><br><input id="order" type=checkbox bind:checked={$config.ordered}> 
            
            <button on:click={reset} class="w3-button w3-padding-small w3-light-grey w3-medium">RESET</button>
        </div>
        {/if}
        <button on:click={undo} class="w3-button w3-padding-large w3-light-grey w3-xxlarge">⏪︎</button>
        <button on:click={pause} class="w3-button w3-padding-large w3-light-grey w3-xxlarge" style="">
        {#if paused}
        ⏵︎
        {:else}
        ⏸︎
        {/if}
    </button>
    </div>
    
    <div style="position:absolute; width:100%; left:0; display: flex;
    flex-flow: row wrap;
    justify-content: center;">
        {#each clockids as i}
            <div class="watch">
                <div class="w3-sand w3-border w3-padding w3-margin w3-round-large">
                    <Clock 
                    on:mousedown={() => clicked(i)}
                    bind:this={clocks[i]}
                    id = {i}
                    config = {$config}
                    editable = {showsettings}
                    />
                </div>
            </div>
        {/each}
    </div>
<!--     <div class=demo-container>
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
    </div> -->
</div>


<style>
    .watch {
        float: left; 
        width: 45%;
    }

    input {
        text-align: center;
    }

    /* input
    {
        background: transparent;
        border: 1px;
    } */
    /* .demo-container {
        width: 100%;
        }
    .demo-widget {
    height: 100%;
    width: 100%;
    } */
</style>

<script lang="ts">
    // import Grid from "svelte-grid";
    // import gridHelp from "svelte-grid/build/helper/index.mjs";
    
    // const COL=3
    // const cols = [[1000, COL]];
    // let items = [0,1,4,2,3].map(function(id){
    //     return {
    //         [COL] : gridHelp.item({
    //             w: 1,
    //             h: 1,
    //             x: 0,
    //             y: id,
    //             resizable: false,
    //             }),
    //         id: id
    //     }
    // })

    
    

    import Clock from './Clock.svelte'
    import { writable } from 'svelte-local-storage-store'
    
    let paused = undefined
    let showsettings = false;

    let clocks = []  // bound to clock objects
    let history = [] 
    let clockids = [0,1,4,2,3]
    $: clockids = [...Array($config.players).keys()];

    const nextclock = [
        [0],
        [1,0],
        [1,2,0],
        [1,3,0,2],
        [0,1,3,4,2],
        [0,1,3,5,4,2],
        [0,1,3,5,6,4,2],
        [0,1,3,5,7,6,4,2]
    ]
    
    const _config = {players: 4, bronstein: 5, fischer: 5 , basetime: 10, ordered:true}
    
    let config = writable("config", _config);

    function undo() {
        if (history.length == 0) {return}
        
        let last = history.pop()

        
        for (let i in last) {
            clocks[i].setstate(last[i])
        }
    }

    function clicked(i: number) {
        if (showsettings) {return}

        logstate()

        if (clocks.every((c) => c.isrunning() == false)) {
            clocks[i].start()
            paused = undefined            
        }
        else if ($config.ordered && clocks[i].isrunning()) {
            clocks[i].stop()
            let current = nextclock[$config.players-1][i]
            clocks[current].start()
        } else if (! $config.ordered && !clocks[i].isrunning()) {
            for (let i in clockids) {
                clocks[i].isrunning() && (clocks[i].stop())
            }
            clocks[i].start()
        } else if (! $config.ordered && clocks[i].isrunning()) {
            clocks[i].stop()
        }
    }
    
    function pause() {
        logstate()
        if (paused === undefined) {  // not paused
            for (let i in clockids) {
                clocks[i].isrunning() && (paused = i)
                clocks[i].pause()
            }
        } else {  // resume
            if (clocks.every(c=>!c.isrunning())) {
                clocks[paused].unpause()
            }
            paused = undefined
        }
    }
    
    function reset() {
        logstate()
        for (let i in clockids) {
            clocks[i].reset()
        }
        paused = undefined
    } 

    function logstate() {
        history.push(
            structuredClone(clocks.map(c=>c.getstate())))
    }
</script>


