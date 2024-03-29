import { error } from '@sveltejs/kit';
// loat the blogposts from bonnie.ts
import { blogPosts2 } from '../../../blogPosts';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    // get the slug from the params
    const { post } = params;
    // find the blog post that has the matching post as it's link
    const blogPost = blogPosts2.find((blogPost) => blogPost.slug === post);
    // if we found a blog post then return it
    if (blogPost) {
        return {
                blogPost
        };
    }
    // if we didn't find a blog post then return an error
    return error(404, 'Post not found');
}