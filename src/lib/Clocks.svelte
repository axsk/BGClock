<script>
    import Clock from './Clock.svelte'
    import Grid from "svelte-grid";
    import gridHelp from "svelte-grid/build/helper/index.mjs";
    import { writable } from 'svelte-local-storage-store'
    export const basis = writable("basetime", 5)

    let clockids = [0,1,2,3]
    let clocks =  []
    let current = -1

    //$basis = 10
    let byoyomis = 0
    let byoyomitime = 60
    let bronstein = 0
    let fischer = 0

    function clicked(i) {
        if (current == -1){
            current = i
            clocks[current].run()
        } else if (current == i){
            clocks[i].stop()
            current = (i+1)%clockids.length
            clocks[current].run()
        }
    }

    function pause() {
        for (let i in clockids) {
            clocks[i].pause()
        }
        current = -1
        console.log(clocks)
    }

    let items = [
    gridHelp.item({ x: 0, y: 0, w: 2, h: 2, id: 1 }),
    gridHelp.item({ x: 2, y: 0, w: 2, h: 2, id: 2 }),
    ];

</script>

{$basis}
Basis <input bind:value={$basis} type="number">
byoyomis <input bind:value={byoyomis} type="number">
byoyomitime <input bind:value={byoyomitime} type="number">
bronstein <input bind:value={bronstein} type="number">
fischer <input bind:value={fischer} type="number">

{#each clockids as c, i}
<div class="box">
    <Clock 
        on:click={() => clicked(i)}
        id={i}
        bind:this={clocks[i]}
        bind:basis={$basis}
        bind:byoyomis
        bind:byoyomitime
        bind:bronstein
        bind:fischer
    />
</div>
{/each}

<button on:click={pause}>||</button>

<style>
    .box {
        float: left;
        width: 45%;
    }
</style>