
<script>
    //@ts-check
    export let basis = 15
    export let byoyomitime = 5;
    export let byoyomis = 5;
    export let fischer = 30
    export let bronstein = 3
    export let label = "Player"
    export let id 

    import { writable } from 'svelte-local-storage-store'

    const seconds = writable("seconds"+id, basis)
    const obj = writable("obja"+id, {basis: 1, fischer: 3})
    $: $obj = {basis: basis, fischer: fischer}
    

    //$: seconds = basis;
    let _bronstein = bronstein
    let _str
    let inby = false


    export let running = false

    let runtime = 0
    const delta = .1 // in secs
    let moves = 0

    setInterval(update, delta*1000)

    function update() {
        console.log(($obj))
        if (running) {
            runtime += delta
            if (_bronstein > 0) {
                _bronstein -= delta
            } else {
                $seconds -= delta
                /*if (seconds <= 0) {
                    if (inby) {
                        byoyomis -= 1
                        seconds = byoyomitime
                    } else {
                        inby = true
                        seconds = byoyomitime
                    }                  
                }*/
            }
        }
    }

    export function run() {
        running=true
        _bronstein = bronstein
        if (inby) {
            $seconds = byoyomitime
        }
        
    }

    export function stop() {
        running=false
        $seconds += fischer
        moves += 1 // TODO: dont incerment on pause resume
    }

    export function pause() {
        running=false
    }

    function print(seconds, bronstein, byoyomis, byoyomitime) {
        let str = seconds.toFixed(1)
        if (_bronstein > 0) {
            str = '(' + _bronstein.toFixed(1) + ')+' + str
        }
        if (byoyomis > 0) {
            str += ` + (${byoyomis} x ${byoyomitime})`
        }
        return str
    }

    $: _str=print($seconds, _bronstein, byoyomis, byoyomitime)

 
</script>

<div id="square" on:click on:keypress class="{running ? 'running' : ''}">
    <div class="label">{label}</div>
    <div class="time">{_str}</div>
    
    <span class="moves">{moves} x {(runtime/moves).toFixed(1)}⌀</span>
    <span class="total">{runtime.toFixed(1)}</span>
</div>

<style>

	#square {
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