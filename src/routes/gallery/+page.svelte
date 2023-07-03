<script>
    import ArtDisplay from "../../components/ArtDisplay.svelte";
    import { collections, artPieces } from '../../bonnie.ts';
</script>
<div class="flex">
    <div class="flex-auto">
        <h1>Gallery</h1>
    </div>
</div>

<div class="flex">
    {#each collections as collection}
         <div class="flex-auto">
            <div class="flex-col">
                <div class="flex-auto">
                    <h2>{collection.collectionName}</h2>
                </div>
                <div class="flex-auto">
                    <img src="{collection.collectionImage}" />
                </div>
                <div class="flex-auto">
                    <p>{collection.collectionDescription}</p>
                </div>
            </div>
         </div>
    {/each}
</div>

