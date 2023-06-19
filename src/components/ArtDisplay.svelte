<div class="flex">
    <div class="flex-auto showcase1">
        <!-- display art1.png -->
    </div>
    <div class="flex-auto showcase2">
        <!-- display art2.png -->
    </div>
    <div class="flex-auto showcase3">
        <!-- display art3.png -->
    </div>
</div>

<style>
    .flex {
        display: flex;
        justify-content: space-evenly;
        /* min-height 30% view width */
        min-height: 50vw;
    }
    .flex-auto {
        flex: 1;
        margin: 10px;
        padding: 10px;
        max-width: 250px
        
    }
    .showcase1 {
        min-width: 40px;
        min-height: 50px;
        background-image: url('/art1.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .showcase2 {
        min-width: 40px;
        min-height: 50px;
        background-image: url('/art2.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .showcase3 {
        min-width: 40px;
        min-height: 50px;
        background-image: url('/art3.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

</style>