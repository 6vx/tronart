<script>
    import '../app.css'
    import { onMount } from 'svelte';


    import { Hamburger } from 'svelte-hamburgers';

    let open;

    import { Modals, closeModal, closeAllModals, openModal, modals } from 'svelte-modals'
	import { fade } from 'svelte/transition'
	import Modal from '../components/Modal.svelte'
    import Menu from '../components/Menu.svelte'
	
	function handleOpen() {
        if (!open) { 
            openModal(Menu, { 
			title: `Alert #${$modals.length + 1}`, 
			message: "This is a menu",
			onOpenAnother: () => {
				handleOpen()
			}

        })
        if (open) {
            closeAllModals()
        }
	}
}

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



</script>

<!-- start with header, extra large font Bonnie Godin -->
<header>
    <!-- putting a full width image as background here sig.jpg -->
    <img src="sig.jpg" alt="Bonnie Godin" width="100%" height="auto">
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
        <div class="flex-auto"><a href="/gallery">gallery</a></div>
        <div class="flex-auto"><a href="/blog">blog</a></div>
        <div class="flex-auto"><a href="/contact">contact</a></div>
    </nav>
<!-- else show the hamburger -->
{:else}
    <div class="hamburger" on:click={handleOpen}>
        <Hamburger type="none" --color="#b579a0" />
    </div>
{/if}



<!-- <nav class="flex">
    <div class="flex-auto"><a href="/">home</a></div>
    <div class="flex-auto"><a href="/about">about</a></div>
    <div class="flex-auto"><a href="/gallery">gallery</a></div>
    <div class="flex-auto"><a href="/blog">blog</a></div>
    <div class="flex-auto"><a href="/contact">contact</a></div>
</nav> -->

<br>

<Modals>
  <div
    slot="backdrop"
    class="backdrop"
	transition:fade
    on:click={closeAllModals}
  />
</Modals>

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
        margin-bottom: 0;
        padding-bottom: 0; 
        margin-top: 15px;   
        font-size: 1.2rem;    
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
        text-decoration: none;
        font-weight: bold;
    }
    /* for the nav items - less space around each and a border around each */
    nav a {
        padding: 0.5rem;  
        text-decoration: none;    
    }
    h1 {
        margin-bottom: 0;
        margin-top: 0;
        padding-bottom: 0;
        /* black outline 1px */
    }
    .hamburger {
        position: absolute;
        top: 10px;
        right: 0;
        z-index: 2;
    }
    .overmenu {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        /* background-color: rgba(0, 0, 0, 0.5); */
        background-color: rgba(255, 255, 255, 0);        
        z-index: 1;

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
  }
</style>