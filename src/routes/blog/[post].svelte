<!-- this will display a blogpost in full size -->
<script>
    // read the slug named 'post' from the url
    export let data;
    const { post } = data.params;
    // get the blogPosts array from bonnie.ts
    import { blogPosts } from '../../bonnie.ts';
    // find the blogPost that matches the slug
    let blogPost = blogPosts.find((blogPost) => blogPost.link == post);

</script>

<section>

    
</section>