<script>
    import { blogPosts } from '../../bonnie.ts';
    import BlogCard from '../../components/BlogCard.svelte';
</script>

<div class="flex">
    <div class="flex-auto">
    </div>
</div>

<div class="flex">
    <!-- for each blogpost display a blogcard and send it's data as the prop -->
    {#each blogPosts as blogPost}
        <BlogCard {blogPost} />
    {/each}
    
    
</div>