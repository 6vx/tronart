<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <!-- add the data.blogPost.hiddenTags to the meta head tags -->
    {#each data.blogPost.hiddenTags as tag}
    <meta name="keywords" content="{tag}">
    {/each}
    <meta name="description" content="{data.blogPost.teaser}">
</svelte:head>

<div class="flex-col blog-max">
    <div class="flex-auto">
        <h1>{data.blogPost.title}</h1>
    </div>
    <div class="flex-auto">
        <img src="{data.blogPost.image}" alt="">
    </div>
    <div class="flex-auto">
        <p>{data.blogPost.date}</p>
    </div>
    <div class="flex-auto">
        {#each data.blogPost.body as line}
        <p>{line}</p>
        {/each}
    </div>
    <div class="flex-auto">
        <a href="/blog">Back to blog</a>
    </div>

</div>

<style>
    .flex-col {
        display: flex;
        flex-direction: column;
        /* center everything */
        align-items: center;
        justify-content: center;


    }
    /* set .blog-max to a max width of 500 */
    .blog-max {
        max-width: 500px;
        margin: 5px;
        padding: 5px;
    }
    a {
        color: #b579a0;
    }
</style>