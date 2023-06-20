<script>
    // i want to cycle the splash between three images, and use a fade transition for it

    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let index = 0;
    let images = [
        '/tron1.jpg',
        '/tron2.jpg',
        '/tron3.jpg'
    ];

    let currentImage = 0;

    const nextImage = () => {
        currentImage = (currentImage + 1) % images.length;
    }

    onMount(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    });

    
    
</script>

<div class="splash">
    {#if currentImage == 0}
    <div class="image1" out:fade="{{duration:400}}" in:fade="{{delay:405, duration:700}}">
        <img src={images[0]} alt="tron1" />
    </div>
    {/if}
    {#if currentImage == 1}
    <div class="image1" out:fade="{{duration:400}}" in:fade="{{delay:405, duration:700}}">
        <img src={images[1]} alt="tron2" />
    </div>
    {/if}
    {#if currentImage == 2}
    <div class="image1" out:fade="{{duration:400}}" in:fade="{{delay:405, duration:700}}">
        <img src={images[2]} alt="tron3" />
    </div>
    {/if}
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
    /* float image1 above the splash with the same height */
    .image1 {
        position: relative;
        top: 0;
        left: 0;
        height: 55vh;
        width: 100%;
        z-index: 1;
    }

</style>