<script>
    // i want to cycle the splash between three images, and use a fade transition for it
    import { Carousel, CarouselTransition } from 'flowbite-svelte'

    import { crossfade } from 'svelte/transition';

    let images = [
        {
    id: 0,
    name: "Bonnie Godin",
    imgurl: "/tron1.jpg",
    attribution: "Bonnie Godin",
  },
  {
    id: 1,
    name: "Bonnie Godin",
    imgurl: "/tron2.jpg",
    attribution: "Bonnie Godin",
  },
  {
    id: 2,
    name: "Bonnie Godin",
    imgurl: "/tron3.jpg",
    attribution: "Bonnie Godin",
  },
    ];

    let currentImage = 0;

    function changeImage() {
      currentImage = (currentImage + 1) % images.length;
    }

    // change the image every five seconds
    setInterval(changeImage, 5000);



    
    
</script>

<div class="splashHolder">
  <div class="splash">

  </div>

  {#if currentImage === 0}
    <div class="splash2" style="background-image: url('/tron1.jpg');">
    </div>
{/if}


{#if currentImage === 1}
    <div class="splash2" style="background-image: url('/tron2.jpg');">
    </div>
{/if}

{#if currentImage === 2}
    <div class="splash2" style="background-image: url('/tron3.jpg');">
    </div>
{/if}


</div>









<style>

    .splash {
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 55vh;
    margin: 0px;
    padding: 0px;
    }

    /* .splash {
        height: 55vh;
        width: 100%;
        margin: 0px;
        padding: 0px;
        overflow: hidden;
    } */

    /* splash2 will float over top of splash */
    .splash2 {
        height: 55vh;
        width: 100%;
        margin: 0px;
        padding: 0px;
        overflow: hidden;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        top: 0px;
        left: 0px;
        opacity: 1;
        transition: opacity 1s ease-in-out;
    }

</style>