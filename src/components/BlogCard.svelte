<script>
    export let blogEntryData = {
        title: "Blog Title",
        date: "2021-01-01",
        description: "Blog Description",
    }
</script>

<div class="blog-card">
    <h2>{blogEntryData.title}</h2>
    <p>{blogEntryData.date}</p>
    <p>{blogEntryData.description}</p>
</div>