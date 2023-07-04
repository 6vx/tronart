<script>
    import Bio from '../../components/Bio.svelte'
    import { metadata } from '../../bonnie.ts'
    import { marked } from 'marked'
</script>

<div class="flex">
    <div class="flex-auto">
        <img class="aboutImage" src="/bonnieAboutPage.JPG" alt="">
    </div>
    <div class="flex-auto">
        <div class="markdownblock">
        {@html marked(metadata.shortDescription)}</div>
    </div>

    <div class="flex-auto">
        <Bio />
    </div>
</div>


<!-- <h2>Bonnie Godin</h2>

<p>Part time artist, part time paramedic.</p>

<p>An artist as far back as she can remember, historically focusing on graphite pencil and charcoal, finally begun her journey with oil painting beginning early 2022.</p>

<p>Check out the portfolio section to view student assignments and passion projects.</p> -->

<style>
    /* i want aboutImage to be the width of the screen */
    .aboutImage {
        width: 100%;
    }
    h3 {
        /* italic? */
        font-style: italic;
        /* center */
        text-align: center;
        margin-left: 2rem;
        margin-right: 2rem;
        padding-left: 4rem;
        padding-right: 4rem;
    }
    .markdownblock {
        /* height: 50%; */
        align-items: center;
        justify-content: center;
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 2rem;
        padding-right: 2rem;
        /* extra padding and in italics */
        /* padding: 0 0.8rem; */
        /* font-style: italic; */
    }
</style>