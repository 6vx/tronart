<script>
    import '../app.css'
</script>

<!-- start with header, extra large font Bonnie Godin -->
<header>
    <h1>Bonnie Godin</h1>
</header>

<nav class="flex">
    <div class="flex-auto"><a href="/">home</a></div>
    <div class="flex-auto"><a href="/about">about</a></div>
    <div class="flex-auto"><a href="/gallery">gallery</a></div>
    <div class="flex-auto"><a href="/blog">blog</a></div>
    <div class="flex-auto"><a href="/contact">contact</a></div>
</nav>

<br>
<slot></slot>

<br>

<bottombar>
    
    <br>
    <!-- i want a box to sign up for email newsletter here -->
    <div class="newsletter">
        <div class="flex-auto">
            <h3>Sign up for my newsletter!</h3>
        </div>

        <div class="flex-auto">
            <form action="https://formspree.io/f/maylqzqk" method="POST">
                <input type="email" name="_replyto" placeholder="Your email" />
                <button type="submit">Send</button>
            </form>
        </div>
        
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
        font-size: 2rem;
        margin-bottom: 0;
        padding-bottom: 0; 
        margin-top: 0;       
    }
    br {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    /* make newsletter smaller and centered */
    .newsletter {
        text-align: center;
        font-size: 0.8rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    form {
        display: flex;
        justify-content: center;
    }
    /* tighten up the nav - smaller and less space, center everything tightly  */
    nav {
        display: flex;
        justify-content: center;
        font-size: 0.8rem;
        /* all caps */
        text-transform: uppercase;
        font-weight: bold;
    }
    /* for the nav items - less space around each and a border around each */
    nav a {
        padding: 0.5rem;  
        color: black      
    }
    h1 {
        margin-bottom: 0;
        margin-top: 0;
        padding-bottom: 0;
        /* strong black outline */
        text-shadow: 2px 2px 0px #000,
                    -2px 2px 0px #000,
                    2px -2px 0px #000,
                    -2px -2px 0px #000;
    }
</style>