<script>

</script>

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



<style>
    /* the flex should be 75% of the view height */
    .flex {
        min-height: 50vh;
        /* height: 75vh; */
        margin: 10px;
        padding: 10px;
    }

    .bio {
        height: 100%;
        /* when it's tall the top and bottom could be cropped a bit */

        /* minimum height of 100px */
        /* min-height: 100px; */
        /* max width of 40% */
        /* max-width: 50%; */
        /* crop it like a circle */
        border-radius: 5%;
        /* make it a bit smaller than the container */
        transform: scale(0.9);

        /* padding: 10px;
        margin: 10px; */
    }
    /* make these flex-autos side by side */
    .third {
        /* this flex is 1/3rd width */
        flex: 1 1 25%;
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
        padding: 0 1rem;
        /* font-style: italic; */
    }

    .bio {
        background-image: url('/tron2.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>