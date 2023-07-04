<script>

    import { metadata } from '../bonnie.ts'

    import { onMount } from 'svelte';

    // if mobile size screen set showMobile
    let showMobile = false;
    onMount(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        showMobile = mediaQuery.matches;
        mediaQuery.addEventListener('change', (e) => {
        showMobile = e.matches;
        });
    });

</script>
<div class="bio2">

    {#if !showMobile}
    <div class="flex2">
        <img src="{metadata.aboutBioImage}" alt="tron2" class="imageVersion" />
    </div>

    <div class="flex2">
        <div class="flex-auto blurb">
            <div>
                <h1>Welcome To My Gallery</h1>
        
                <h2>I'm Bonnie Godin - Professional Artist & First Responder</h2>
                
                <p>
                    What I know for sure about my journey of being an artist is that it was never a choice. 
                    I dedicate time, space and energy toward painting because I've 
                    known the other side - to stifle your creativity is only to stifle magic in your life.
                </p>
                    
                <p></p>
            </div>
            </div>
    </div>
    {:else}
    <div class="flex">
        <div class="flex-auto third">
            <div class="bio">
            </div>
        </div>
        <div class="flex-auto twothird blurb">
           <div>
            <h1>Welcome To My Gallery</h1>
    
            <h2>I'm Bonnie Godin - Professional Artist & First Responder</h2>
            
            <p>
                What I know for sure about my journey of being an artist is that it was never a choice. 
                I dedicate time, space and energy toward painting because I've 
                known the other side - to stifle your creativity is only to stifle magic in your life.
            </p>
                
            <p></p>
           </div>
        </div>
    </div>
    {/if}


</div>




<style>
    /* the flex should be 75% of the view height */
    .flex {
        min-height: 25vh;
        /* height: 75vh; */
        margin: 5px;
        padding: 5px;
    }
    .flex2 {
        min-height: 33vh;
        margin: 5px;
        padding: 5px;
    }


    .bio {
        height: 25vw;
        width: 25vw;
        /* i want to center it vertically */
        display: flex;
        align-items: center;
        justify-content: center;


        /* when it's tall the top and bottom could be cropped a bit */

        /* minimum height of 100px */
        /* min-height: 100px; */
        /* max width of 40% */
        /* max-width: 50%; */
        /* crop it like a circle */
        /* border-radius: 5%; */
        /* make it a bit smaller than the container */
        /* transform: scale(0.9); */

        /* padding: 10px;
        margin: 10px; */
    }
    /* make these flex-autos side by side */
    .third {
        /* this flex is 1/3rd width */
        flex: 1 1 25%;
        /* vertically center align content */
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .twothird {
        /* this flex is 2/3rds width */
        flex: 1 1 55%;
    }
    /* vertically center the blurb */
    .blurb {
        /* height: 50%; */
        display: flex;
        align-items: center;
        justify-content: center;
        /* extra padding and in italics */
        padding: 0 0.8rem;
        /* font-style: italic; */
    }

    .bio {
        background-image: url('/bonnieLifestyle3.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .imageVersion {
        /* make it a bit smaller than the container */
        /* padding: 10px;
        margin: 10px; */
        width: 100%;
        margin: 0;
        padding: 0;
        border-radius: 5%;
    }
    .bio2 {
        overflow: hidden;
    }
</style>