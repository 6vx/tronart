<script>
    import { collections, artPieces, blogPosts } from '../../bonnie.ts';
</script>
<div class="flex">
    <div class="flex-auto">
        <h1>Blog</h1>
    </div>
</div>

<div class="flex">
    {#each blogPosts as blogPost}
         <div class="flex-auto">
            <div class="flex-col">
                <div class="flex-auto">
                    <h2>{blogPost.title}</h2>
                </div>
                <div class="flex-auto">
                    <img src="{blogPost.image}" />
                </div>
                <div class="flex-auto">
                    <p>{blogPost.teaser}</p>
                </div>
            </div>
         </div>
    {/each}
</div>