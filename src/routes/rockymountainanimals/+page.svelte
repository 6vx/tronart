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
    <div class="flex-auto">
    <h1>Rocky Mountain Animals</h1>


    </div>

    <div class="flex">
        {#each rockyMountainAnimals as artPiece}
            <div class="flex-auto">
                <img src={artPiece.image} alt="">
                <h3>{artPiece.title}</h3>
                <p>{artPiece.description}</p>
            </div>
        {/each}
    </div>

</div>


<style>
    .flex {
        text-align: center;
    }
    
</style>