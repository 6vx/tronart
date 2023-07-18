<script>
    let email_address = "";
    let nameOfUser = "";
    let comment = "";
</script>

<div class="flex">
    <div class="flex-auto">
        <h1>Contact</h1>

        <p>Interested in a commission? Something for your home, a pet portrait commission or a gift for a friend? Or maybe just a general question? Drop a line!</p>

        <form action="https://tron.deno.dev/api/comment?email={email_address}&comment={comment}&nameOfUser={nameOfUser}" method="POST">
                <div class="flex-auto">
                    <input type="text" name="name" placeholder="Your name" bind:value={nameOfUser}/>
                </div>
                <div class="flex-auto">
                    <input type="email" name="_replyto" placeholder="Your email" bind:value={email_address}/>
                </div>
                <!-- a flex-auto with a 25vh textarea for a comment in it -->
                <div class="flex-auto">
                    <textarea name="comment" placeholder="Your comment" bind:value={comment}></textarea>
                </div>
                <div class="flex-auto">
                    <button type="submit">Send</button>
                </div>
        </form>

        <h3>How does the commission process work?</h3>

        <p>You and I will work closely together to create a custom painting that reflects your vision. One of my favourite ways to create commissions is to work closely with the space you're trying to fill - through matching the atmosphere and colour palette already embedded in your room.</p>

        <p>I require 50% down before I begin a custom painting. The second half is requested once the piece is completed to your liking and is ready to be shipped out. Price and shipping costs vary depending on the size of the piece.</p>

        <h3>Do you do pet portraits?</h3>

        <p>I sure do and love to do them!</p>
    </div>
</div>

<style>
    .flex {
        /* center the content horizontally */
        display: flex;
        justify-content: center;
        
    }
    .flex-auto {
        flex: 1 1 auto;
        margin-left: 20px;
        margin-right: 20px;
        /* padding: 20px; */
        max-width: 1000px;
    }
    a {
        color: black;
    }
    a > p  {
        font-size: larger;
    }
    /* styles for the form */
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    input {
        width: 200px;
        margin: 10px;
    }
    textarea {
        margin: 10px;
        width: 200px;
        height: 100px;
    }
    button {
        background-color: #b579a0;
        color: white;
        border: none;
        padding: 5px;
        margin: 10px;
        width: 200px;
    }

</style>