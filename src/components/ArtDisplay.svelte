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
    }
    .flex-auto {
        flex: 1;
        margin: 10px;
        padding: 10px;
        
    }
    .showcase1 {
        width: 400px;
        height: 500px;
        background-image: url('/art1.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .showcase2 {
        width: 400px;
        height: 500px;
        background-image: url('/art2.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .showcase3 {
        min-width: 200px;
        min-height: 250px;
        background-image: url('/art3.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

</style>