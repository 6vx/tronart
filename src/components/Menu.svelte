<script>
    import { closeModal, closeAllModals, openModal, modals } from 'svelte-modals'
    import { fly } from 'svelte/transition'
      
    export let isOpen
    export let title
    export let message
    export let onOpenAnother


      
    let stackIndex = $modals.length
    
  </script>
  
  {#if isOpen}
      <!-- on:introstart and on:outroend are required to transition 1 at a time between modals -->
    <div role="dialog" class="modal" transition:fly={{ y: 50 }} on:introstart on:outroend>
      <div class="contents">
        <div class="flex-col">

            <div class="flex-auto" on:click={closeAllModals}><a href="/">home</a></div>
            <div class="flex-auto" on:click={closeAllModals}><a href="/about">about</a></div>
            <div class="flex-auto" on:click={closeAllModals}><a href="/gallery">gallery</a></div>
            <div class="flex-auto" on:click={closeAllModals}><a href="/blog">blog</a></div>
            <div class="flex-auto" on:click={closeAllModals}><a href="/contact">contact</a></div>

        </div>
      </div>
    </div>
  {/if}
  
  <style>
    .modal {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
  
      /* allow click-through to backdrop */
      pointer-events: none;
    }
  
    .contents {
      min-width: 240px;
      border-radius: 6px;
      padding: 16px;
      background: rgb(255, 240, 255);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      pointer-events: auto;
    }
  
    h2 {
      text-align: center;
      font-size: 24px;
    }
  
    p {
      text-align: center;
      margin-top: 16px;
    }
  
    .actions {
      margin-top: 32px;
      display: flex;
      justify-content: space-between;
          gap: 8px;
    }

    .flex-col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 8px;
        text-align: center;
    }

    .flex-auto {
        border: 20px;
        padding: 20px;
    }
    a {
        color: #b579a0;
        /* uppercase */
        text-transform: uppercase;
        /* bold */
        font-weight: bold;
        text-decoration: none;
       
    }
  
  </style>