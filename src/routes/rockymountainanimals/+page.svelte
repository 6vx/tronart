<script>
    // import bonnie.ts
    import { artPieces } from '../../bonnie.ts'

   let rockyMountainAnimals = []

    artPieces.forEach((artPiece) => {
        if (artPiece.belongsToCollection != "Rocky Mountain Animals") {
            return
        } else {
            rockyMountainAnimals.push(artPiece)
        }
    })

    console.log(artPieces)

</script>

<div class="flex">
    <div class="gif-box">
        
    </div>
    <div class="flex-auto">

    <div class="top-blurb">
        <h1>Rocky Mountain Animals</h1>

        <h3>I painted this series of Rocky Mountains animals as a way to connect to my local community in Calgary, Alberta. Happily, the series ended up doing just that. Most of the animals were sold in my first art show experience, and the remaining will be showcased at the Calgary Stampede 2023!</h3>
        <p>Thank you to my local art community for all the support!</p>
    </div>


    </div>

    <div class="flex">
        {#each rockyMountainAnimals as artPiece}
            <div class="flex-auto art">
                <img src={artPiece.image} alt="{artPiece.title}">
            </div>
        {/each}
    </div>

</div>


<style>
    .flex {
        text-align: center;
    }
    .top-blurb {
        margin: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        /* display animated gif as background from /rma.gif */

    }
    .art {
        margin: 1rem;
    }
    .gif-box {
        background-image: url('/rma.gif');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 50vh;
        width: 100%;
    }
    
</style>