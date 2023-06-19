<script>

</script>

<div class="flex">
    <div class="flex-auto third">
        <div class="bio">
        </div>
    </div>
    <div class="flex-auto twothird blurb">
       <div>
        <p>Part time artist, part time paramedic.</p>

        <p> An artist as far back as she can remember, historically 
            focusing on graphite pencil and charcoal, finally begun her journey with oil 
            painting beginning early 2022.</p>  
            
        <p> Check out the portfolio section to view student assignments and passion projects.</p>
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
        overflow: hidden;

        /* minimum height of 100px */
        /* min-height: 100px; */
        /* max width of 40% */
        /* max-width: 50%; */
        /* crop it like a circle */
        border-radius: 5%;
        /* make it a bit smaller than the container */
        transform: scale(0.8);

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
        font-style: italic;
    }

    .bio {
        background-image: url('/tron2.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>