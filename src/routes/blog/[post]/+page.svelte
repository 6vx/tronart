<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <!-- add back the tags after -->
    <meta name="description" content="{data.blogPost.teaser}">
    <style>
        .html-wrapper img {
            max-width: 100%;
        }
    </style>
</svelte:head>

        <div class="flex-col">
            <div class="flex-auto">
                <h1>{data.blogPost.title}</h1>
            </div>
            <div class="flex-auto banner">
                <img src="{data.blogPost.banner}" alt="">
            </div>
            <div class="flex-auto date">
                <p>{data.blogPost.date}</p>
            </div>
            <div class="flex-auto location">
                <p>{data.blogPost.location}</p>
            </div>
            <div class="flex-auto blog-max">
                <!-- insert the html here -->
                <div class="html-wrapper">
                    {@html data.blogPost.html}
                </div>
            </div>
            <div class="flex-auto backlink">
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
        text-align: center;
        margin: 0px;
        padding: 0px;
        max-width: 500px
    }
    /* set .blog-max to have some margin and padding */
    a {
        color: #b579a0;
        font-size: 0.8em;
    }
    /* set .date to a darker link color and smaller font size */
    .date {
        color: #b579a0;
        font-size: 1em;
    }

    .location {
        color: #b579a0;
        font-size: 1em;
    }
    
    /* set .date and .backlink to be full width of their container */
    .date, .backlink {
        width: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
</style>