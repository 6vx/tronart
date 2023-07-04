<script>
    import Bio from '../../components/Bio.svelte'
</script>

<div class="flex">
    <div class="flex-auto">
        <img class="aboutImage" src="/bonnieAboutPage.JPG" alt="">
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
</style>