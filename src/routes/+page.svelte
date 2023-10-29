<!-- making a generic portfolio landing -->
<!-- needs gallery and about links -->
<script>
    import Splash from '../components/Splash.svelte'
    import Bio from '../components/Bio.svelte'
    import ArtDisplay from '../components/ArtDisplay.svelte'
    import ArtDisplay2 from '../components/ArtDisplay2.svelte'
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

<a href="/rockymountainanimals">
<ArtDisplay />
<ArtDisplay2 /></a>

<a href="/about">
<Bio />
<div class="flex">
    <div class="flex-auto">
        <a href="/about" style="margin-top: 0; padding-top: 0; color: #b579a0">More About the Artist →</a>
    
    </div>
</div>
</a>

<br>
<br>

<div class="flex">
    <div class="flex-auto">

        <a href="/contact">
            <button>
                CONTACT
            </button>
        </a>
    </div>
</div>

<style>
    /* p {
        margin: 10px 30px 10px 30px;
    } */
    /* remove all link styles */
    a {
        text-decoration: none;
        color: inherit;
    }    
    button {
        background-color: #b579a0;
        color: white;
        border: none;
        padding: 0.5rem;
    }
</style>