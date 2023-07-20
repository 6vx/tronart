<script>
    export let blogPost;
</script>

<div class="blog-card">
    <div class="blog-card-image">
        <img src={blogPost.image} alt={blogPost.title} />
    </div>
    <div class="blog-card-content">
        <h2>{blogPost.title}</h2>
        <p>{blogPost.teaser}</p>
        <a href="/blog/{blogPost.link}">Read more</a>
    </div>
</div>

<style>
    /* side by side with a photo the title should be extra bold and the teaser should be italics */
    .blog-card {
        display: flex;
        flex-direction: row;
        margin: 1rem;
        padding: 1rem;
    }
    /* the image should be the size of it's space and the sides should be trimmed off to fit */
    .blog-card-image {
        flex: 1;
        overflow: hidden;
        /* center */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .blog-card-image img {
        height: auto;
        object-fit: cover;
        max-width: 200px;
    }
    /* the card content should align with the image and be flush */
    .blog-card-content {
        flex: 2;
        padding: 0;
        padding-left: 1rem;
        margin: 0;
        
    }
    /* the title should be extra bold */
    .blog-card-content h2 {
        font-weight: 800;
    }
    /* the link should be in the color of site */
    .blog-card-content a {
        color: #b579a0;
    }

</style>