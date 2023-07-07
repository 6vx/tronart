<script>
    import '../app.css'
    import { onMount } from 'svelte';
    import { Hamburger } from 'svelte-hamburgers';
    import { metadata } from '../bonnie';
    
    let open;

    let miniOpened = false;

    import { Modals, closeModal, closeAllModals, openModal, modals } from 'svelte-modals'
	import { fade } from 'svelte/transition'
	import Modal from '../components/Modal.svelte'
    import Menu from '../components/Menu.svelte'
	

// detect the screen size and make available to the page

// let width = window.innerWidth;

// lets try this instead :
// 
  let showMenu = false;
  onMount(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    showMenu = mediaQuery.matches;
    mediaQuery.addEventListener('change', (e) => {
      showMenu = e.matches;
    });
  });

  function handleMiniOpen () {
    miniOpened = !miniOpened;
  }

  // i want to disable right clicking on the page
//   document.addEventListener('contextmenu', event => event.preventDefault());



</script>

<svelte:head>
    <!-- adding the google tags for seo from bonnie.ts metadata -->
    <title>{metadata.title}</title>
    <meta name="description" content="{metadata.description}" />
    <meta name="keywords" content="{metadata.keywords}" />

</svelte:head>

<!-- start with header, extra large font Bonnie Godin -->
<header>
    <div class="flex">
        <div class="flex-auto1">
            <div class="littleBox">
                
            </div>
        </div>
        <div class="flex-auto sig" ></div>
        <div class="flex-auto1">
            {#if (!showMenu)}
            <div class="hamburger" on:click={handleMiniOpen}>
                <Hamburger type="none" --color="#b579a0" />
            </div>
            {:else}
            <div class="littleBox">
                
            </div>
            {/if}
        </div>
    </div>
</header>

<!-- if the site is on mobile size screen the hamburger should be showing -->

<!-- {#if (width < 600)}
    <div class="hamburger" on:click={handleOpen}>
        <Hamburger type="none" --color="#b579a0" />
    </div>
{/if} -->

<!-- if the site is on a desktop size screen the regular menu should be showing -->

{#if (showMenu)}
    <nav class="flex menu">
        <div class="flex-auto"><a href="/">home</a></div>
        <div class="flex-auto"><a href="/about">about</a></div>
        <div class="flex-auto"><a href="/rockymountainanimals">gallery</a></div>
        <div class="flex-auto"><a href="/blog">blog</a></div>
        <div class="flex-auto"><a href="/contact">contact</a></div>
    </nav>

{/if}
<!-- <nav class="flex">
    <div class="flex-auto"><a href="/">home</a></div>
    <div class="flex-auto"><a href="/about">about</a></div>
    <div class="flex-auto"><a href="/gallery">gallery</a></div>
    <div class="flex-auto"><a href="/blog">blog</a></div>
    <div class="flex-auto"><a href="/contact">contact</a></div>
</nav> -->
{#if miniOpened}
<div class="fullWidthMenu" in:fade out:fade="{{duration:50, delay:100}}">
    <nav class="flex-col menu">
        <div class="flex-auto" on:click={handleMiniOpen}><a href="/">home</a></div>
        <div class="flex-auto" on:click={handleMiniOpen}><a href="/about">about</a></div>
        <div class="flex-auto" on:click={handleMiniOpen}><a href="/rockymountainanimals">gallery</a></div>
        <div class="flex-auto" on:click={handleMiniOpen}><a href="/blog">blog</a></div>
        <div class="flex-auto" on:click={handleMiniOpen}><a href="/contact">contact</a></div>
    </nav>
</div>
{/if}

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
   
    <!-- <nav class="flex">
        <div class="flex-auto"><a href="/">home</a></div>
        <div class="flex-auto"><a href="/about">about</a></div>
        <div class="flex-auto"><a href="/gallery">gallery</a></div>
        <div class="flex-auto"><a href="/blog">blog</a></div>
        <div class="flex-auto"><a href="/contact">contact</a></div>
    </nav> -->

</bottombar>


<style>
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
        text-decoration: none;
        font-weight: bold;
    }
    /* for the nav items - less space around each and a border around each */
    nav a {
        padding: 0.5rem;  
        text-decoration: none;
        color: #b579a0;
    }
    .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.50)
  }

  .menu {
    color: #C05F2B;
    max-width: 1000px;
  }
  /* .header max-width should be reasonable on desktop */
    header {
        min-height: 100px;
        margin: 0 0;
        align-items: center;
    }
    /* all three flex-auto should be on same line */
    .flex-auto  {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flex-auto1  {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* flex-auto should be equal width */
    .sig {
    background-image: url('/sig.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    min-height: 100px;
    /* minimum width of 2/3rds view */
    min-width: 66%;
    margin: 0px;
    padding: 0px;
    }
    /* hamburger needs vertical center */
    .hamburger {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
    }
    .littleBox {
        min-height: 10px;
        min-width: 10px;
    }

    .fullWidthMenu {
        height: 100vh;
    }
    /* the flex-autos within the flex within the fullwidthmenu need some space around them */
    .fullWidthMenu .flex-auto {
        margin: 1rem;
        font-size: x-large;
    }
</style>