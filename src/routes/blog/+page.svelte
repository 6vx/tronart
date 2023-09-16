<script>
    import { blogPosts2 } from '../../blogPosts.ts';
    import BlogCard from '../../components/BlogCard.svelte';
</script>

<div class="flex">
    {#each blogPosts2 as blogPost}
         <BlogCard {blogPost} />
    {/each}
</div>
