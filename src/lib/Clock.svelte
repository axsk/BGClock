<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    
    export let basis = 10
    export let byoyomitime = 5;
    export let byoyomis = 5;
    export let fischer = 30
    export let bronstein = 3

    $: seconds = basis;
    let _bronstein = bronstein
    let _str
    let inby = false


    export let running = false

    setInterval(update, 100)

    function update() {
        if (running) {
            if (_bronstein > 0) {
                _bronstein -= .1
            } else {
                seconds -= .1
                if (seconds <= 0) {
                    if (inby) {
                        byoyomis -= 1
                        seconds = byoyomitime
                    } else {
                        inby = true
                        seconds = byoyomitime
                    }                  
                }
            }
        }
        _str = print()
    }

    export function run() {
        running=true
        _bronstein = bronstein
        if (inby) {
            seconds = byoyomitime
        }
    }

    export function stop() {
        running=false
        seconds += fischer
    }

    function print() {
        let str = seconds.toFixed(1)
        if (_bronstein > 0) {
            str = '(' + _bronstein.toFixed(1) + ')+' + str
        }
        if (byoyomis > 0) {
            str += ` + (${byoyomis} x ${byoyomitime})`
        }
        return str
    }
 
</script>

<div id="square" on:click class="{running ? 'running' : ''}">
    <input>
    {_str}
</div>

<style>
	#square {
        width: 100px;
        height: 100px;
    }

    .running{
        background: rgb(151, 205, 255);
    }


</style>