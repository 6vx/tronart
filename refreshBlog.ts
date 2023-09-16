// this script will refresh the blog
// it'll be run by executing it with Deno in the root directory
// using the following command

// deno run --allow-read --allow-write refreshBlog.ts

// inside the folder static/posts there are a set of markdown files
// these files need to be parsed into html for consumption by the sveltekit app/website

// the markdown files are parsed into javascript objects with the following properties:
// - title
// - date
// - slug
// - hiddentags
// - thumbnail
// - banner
// - teaser
// - content

interface Post { 
    title: string,
    date: string,
    slug: string,
    hiddentags: string[],
    location: string,
    thumbnail: string,
    banner: string,
    teaser: string,
    content: string,
    html: string,
}

// import the markdown parser
import * as marked from 'npm:marked';

// import frontmatter parser
import * as mod from "https://deno.land/std@0.147.0/encoding/front_matter.ts";

const postList = [];

// for each markdown file in the posts folder
// parse the markdown a Post object
// and add it to the PostList

for await (const file of Deno.readDir("./static/posts")) {
    if (file.isFile) {
        const post: Post = {
            title: "",
            date: "",
            slug: "",
            hiddentags: [],
            thumbnail: "",
            banner: "",
            teaser: "",
            content: "",
            html: "",
            location: "",
        };
        const markdownFile = await Deno.readTextFile(`./static/posts/${file.name}`);
        console.log(markdownFile);

        const post_data = mod.extract(markdownFile);
        console.log(post_data);

        // the content is the post_data.body
        post.content = post_data.body;
        // the other attributes are in post_data.attrs object
        post.title = post_data.attrs.title;
        post.date = post_data.attrs.date;
        post.slug = post_data.attrs.slug;
        post.hiddentags = post_data.attrs.hiddentags;
        post.thumbnail = post_data.attrs.thumbnail;
        post.banner = post_data.attrs.banner;
        post.teaser = post_data.attrs.teaser;
        post.location = post_data.attrs.location;

        // convert the content to html from markdown
        post.html = marked.parse(post.content);

        postList.push(post);
    }
}

// at the end we write everything to a ts file
await Deno.writeTextFile("./src/blogPosts.ts", "export let blogPosts2 = " + JSON.stringify(postList));