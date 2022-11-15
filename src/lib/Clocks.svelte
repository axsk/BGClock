<script>
    import Clock from './Clock.svelte'
    let clockids = [0,1,2]
    let clocks = []
    let current = -1

    let basis = 10
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
            clocks[i].stop()
        }
        current = -1
    }



</script>

Basis <input bind:value={basis} type="number">
byoyomis <input bind:value={byoyomis} type="number">
byoyomitime <input bind:value={byoyomitime} type="number">
bronstein <input bind:value={bronstein} type="number">
fischer <input bind:value={fischer} type="number">

{#each clockids as c, i}
    <Clock 
        on:click={() => clicked(i)}
        bind:this={clocks[i]}
        bind:basis
        bind:byoyomis
        bind:byoyomitime
        bind:bronstein
        bind:fischer
    />
{/each}
<button on:click={pause}>||</button>