<script>
    // import bonnie.ts
    import { artPieces } from '../../bonnie.ts'

   let rainbowSeries = []

    artPieces.forEach((artPiece) => {
        if (artPiece.belongsToCollection != "Rainbow Series") {
            return
        } else {
            rainbowSeries.push(artPiece)
        }
    })

    // sort the array so that the pieces with a price that isn't equal to 0 come first. ie sort high to low by price
    rainbowSeries.sort((a, b) => {
        return b.price - a.price
    })

    console.log(artPieces)

</script>

<div class="flex">
    <div class="gif-box">
        
    </div>
    <div class="flex-auto">

    <div class="top-blurb">
        <h1>Rainbow Series</h1>
        <hr>

        <hr>

        <h3>I painted this series of Rocky Mountains animals as a way to connect to my local community in Calgary, Alberta.</h3>
        <h3>     Happily, the series ended up doing just that. Most of the animals were sold in my first art show experience, and the remaining sold at the Calgary Stampede 2023!</h3>
        <p>Thank you to my local art community for all the support!</p>
    </div>

    


    </div>

    <div class="flex">
        {#each rainbowSeries as artPiece}
            <div class="flex-auto art">
                <!-- the hover text should be artPiece.title -->
                <img src={artPiece.image} alt="{artPiece.title}" >
                <p><b>{artPiece.title}</b> - 
                <!-- if artPiece.price is 0, display 'Sold' in italics, otherwise display the price -->
                {#if artPiece.price == 0}
                    <i>Sold</i>
                {:else}
                    <b>Available</b>
                {/if}
                </p>
                <hr>
            </div>
        {/each}
    </div>

</div>


<style>
    .flex {
        text-align: center;
        width: 100%;
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
    .art img {
        width: 100%;
        height: auto;
    }
    .art p {
        font-size: 0.8rem;
        padding: 0;
        margin: 0;
    }
    .gif-box {
        background-image: url('/StampedeBannerCrop.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 50vh;
        width: 100%;
    }
    hr {
        /* make the hr color #C05F2B */
        border: 0;
        height: 1px;
        background: #C05F2B;
        margin-left: 2rem;
        margin-right: 2rem;
    }
</style>