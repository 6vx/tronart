<!-- this will display a blogpost in full size -->
<script>
    import { blogPosts } from '../../bonnie.ts';
    import { onMount } from 'svelte';
    import marked from 'marked';
    import DOMPurify from 'dompurify';

    export let slug;

    let blogPost;

    onMount(async () => {
        blogPost = blogPosts.find(post => post.slug == slug);
        blogPost.content = DOMPurify.sanitize(marked(blogPost.content));
    });

</script>

<section>
    
</section>