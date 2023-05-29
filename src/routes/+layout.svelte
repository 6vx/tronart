<script>
    import '../app.css'
</script>

<slot></slot>

<bottombar>
    <!-- i want a box to sign up for email newsletter here -->
    <div class="newsletter">
        <h3>Sign up for our newsletter</h3>
        <form action="https://formspree.io/f/maylqzqk" method="POST">
            <input type="email" name="_replyto" placeholder="Your email" />
            <button type="submit">Send</button>
        </form>
    </div>
   
    <!-- I want a basic nav here to go between HOME ABOUT GALLERY and CONTACT -->
   
   
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>

</bottombar>
```

<style>
    /* make the nav flex horizontally and space evenly */
    ul {
        display: flex;
        justify-content: space-evenly;
        list-style: none;
    }

</style>