<!-- making a generic portfolio landing -->
<!-- needs gallery and about links -->
<script>
    import Splash from '../components/Splash.svelte'
    import Bio from '../components/Bio.svelte'
    import ArtDisplay from '../components/ArtDisplay.svelte'
    import { metadata } from '../bonnie.ts'
</script>

<Splash carouselImages={metadata.carouselImages}/>

<!-- <div class="flex">
    <br>
    <div class="flex-auto">
        <p>
            An artist first and paramedic second, Bonnie creates vibrant art that reflects reverence for the bright side 
            of life.
        </p>
        <p>
            She believes all of life's pains and hardships have mirror images of beauty and joy. She channels these images 
            onto her canvas through bright colours, dynamic brush strokes and uplifting subject matter.
        </p>
    </div>
    <br>
</div> -->

<ArtDisplay />

<Bio />


<style>
    /* p {
        margin: 10px 30px 10px 30px;
    } */
    
</style>