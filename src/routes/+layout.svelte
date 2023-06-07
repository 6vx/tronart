<script>
    import '../app.css'
</script>

<!-- start with header, extra large font Bonnie Godin -->
<header>
    <h1>Bonnie Godin</h1>
</header>

<br>

<slot></slot>

<br>

<bottombar>
    
    <br>
    <!-- i want a box to sign up for email newsletter here -->
    <div class="newsletter">
        <h3>Sign up for my newsletter!</h3>
        <form action="https://formspree.io/f/maylqzqk" method="POST">
            <input type="email" name="_replyto" placeholder="Your email" />
            <button type="submit">Send</button>
        </form>
    </div>
   
    <!-- I want a basic nav here to go between HOME ABOUT GALLERY and CONTACT -->
   <br>
   
    <nav class="flex">
        <div class="flex-auto"><a href="/">home</a></div>
        <div class="flex-auto"><a href="/about">about</a></div>
        <div class="flex-auto"><a href="/gallery">gallery</a></div>
        <div class="flex-auto"><a href="/blog">blog</a></div>
        <div class="flex-auto"><a href="/contact">contact</a></div>
    </nav>

</bottombar>


<style>
    /* make the nav flex horizontally and space evenly */
    ul {
        display: flex;
        justify-content: space-evenly;
        list-style: none;
    }
    br {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    header {
        text-align: center;
        font-size: 3rem;
        /* give it a black inner shadow */
        text-shadow: 0 0 0.5rem white;
    }
    br {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    /* make newsletter smaller and centered */
    .newsletter {
        text-align: center;
        font-size: 0.8rem;
    }
    form {
        display: flex;
        justify-content: center;
    }
</style>