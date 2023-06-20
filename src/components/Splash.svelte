<script>
    // i want to cycle the splash between three images, and use a fade transition for it
    import { Carousel, CarouselTransition } from 'flowbite-svelte'

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



    
    
</script>







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
        overflow: hidden;
        max-width: 100%;
    }

</style>