<script>
    // i want to cycle the splash between three images, and use a fade transition for it

    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';

    const opacity = tweened(0);

    onMount(() => {
        opacity.set(1);
    });

    const images = [
        '/tron1.jpg',
        '/tron2.jpg',
        '/tron3.jpg'
    ];

    let index = 0;

    function next() {
        index = (index + 1) % images.length;
    }

    $: image = images[index];

    // execute next function every 4.5 seconds
    setInterval(next, 4500);

</script>

<div class="splash">
    <img src={image} alt="tron" on:click={next} transition:fade />
</div>

<style>

    /* .splash {
    background-image: url('/tron1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 55vh;
    margin: 0px;
    padding: 0px;
    } */

    .splash {
        height: 55vh;
        margin: 0px;
        padding: 0px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>