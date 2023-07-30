console.log("Bonnie Godin has been loaded.")

// I want to define everything here in an easily accessible place for Bonnie to edit in the future.

// =====================================
//
//
//
//
// NO BONNIE ZONE BEGINS
//
//
//
//
// =====================================

// these interfaces describe the shape of the data
interface ArtPiece {
    // these parts must be included for every art piece
    // no special characters in title, spaces will be replaced with dashes for links
    title: string,
    description: string,
    belongsToCollection: string,
    image: string,
    // this question mark means that it's optional. Not every art piece needs a blog post or price, as it may not be for sale.
    blogPostLink?: string,
    price?: number,
}

interface BlogPost {
    // these parts must be included for every blog post
    // no special characters in title, spaces will be replaced with dashes for links
    title: string,
    teaser: string,
    body: Array<string>,
    date: string,
    // this question mark means that it's optional. Not every blog post needs to be about an art piece.
    ArtPieceLink?: string,

}

// =====================================
//
//
//
//
// NO BONNIE ZONE ENDS
//
//
//
//
// =====================================

// =====================================
//
//
//
//
// BONNIE EDITS ARE DONE BELOW THIS LINE
//
//
//
//
// =====================================

// this is where metadata is adjusted.
export let metadata = {
    title: "Bonnie Godin",

    description: "Welcome To My Gallery",

    aboutBioImage: '/bonnieLifestyle3.png',

    logoImage: '/sig.png',

    favicon: '/favicon.png',

    instagramHandle: 'bonniegodinart',

    carouselImages: [
        '/bonnieLifestyle1.jpg', 
        '/bonnieLifestyle2.jpg',
        '/womanPainting1.jpg',
    ],

    // these tags are used for SEO in the header of pages, comma separated array of strings
    tags: [
            "artist", 
            "painting", 
            "oil painting", 
            "Calgary", 
            "Canadian", 
            "Wildlife", 
            "Feminine", 
            "Vibrant", 
            "Colourful", 
            "Spiritual"
        ],

    shortDescription: "An *artist* **first** and *paramedic* **second**, Bonnie creates vibrant art that reflects reverence for the bright side of life. \n\n She believes all of lifes pains and hardships have mirror images of beauty and joy. \n\n She channels these images onto her canvases through bright colours, dynamic brush strokes and uplifting subject matter",
                         
}

// this is where the collections are named. Each collection will become a gallery link in itself, so 
// make sure the name doesn't have special characters. they will be removed and replaced with dashes.
// uppercase letters will be replaced with lowercase. 
// It will appear as "First Collection" for humans but link to "/first-collection/the-first-piece"
export let collections = [
    {
        collectionName: "First Collection",
        collectionDescription: "This is the first collection I ever made.",
        collectionImage: "/swan.png",
    },
    {
        collectionName: "Rocky Mountain Animals",
        collectionDescription: "This is a collection of animals I saw in the Rocky Mountains.",
        collectionImage: "/wolf.png",
    },
    {
        collectionName: "Regular Animals",
        collectionDescription: "This is a collection of animals I saw in my regular life.",
        collectionImage: "/horse.png",
    }
]

// This is where all the art pieces will be stored.
// each art piece is an Object { } separated by commas.

// the first three serve as the featured pieces on the main page

// the first OF EACH COLLECTION will be the featured piece for that collection
export let artPieces = [
    {
        title: "Swan Study",
        description: "This is the first piece I ever made.",
        belongsToCollection: "First Collection",
        image: "/swan.png",
        price: 0,
    },
    {
        title: "Winfred",
        description: "This is a wolf I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/wolf.png",
        price: 0,
    },
    {
        title: "Black Stallion Study",
        description: "This is a horse I saw in the Rocky Mountains.",
        belongsToCollection: "Regular Animals",
        image: "/horse.png",
        price: 0,
    },
    {
        title: "Murray",
        description: "This is a goat I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/goat.png",
        price: 0,
    },
    {
        title: "Edgar",
        description: "This is an eagle I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/eagle.png",
        price: 0,
    },
    {
        title: "Charlie",
        description: "This is a chipmunk I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/chipmunk.png",
        price: 0,
    },
    { 
        title: "Bernard",
        description: "This is another goat I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/goat2.png",
        price: 0,
    },
    {
        title: "Fred",
        description: "This is a wolf I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/wolf2.png",
        price: 0,
    },
    {
        title: "Trio",
        description: "This is a pack of wolves I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/wolfPack.png",
        price: 333,
    },
    {
        title: "Beatrice",
        description: "This is a mountain cat I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/mountainCat.png",
        price: 0,
    },
    {
        title: "Boris",
        description: "This is a bear I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/bear.png",
        price: 0,
    },
    {
        title: "Marla",
        description: "This is a lioness I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/lioness.png",
        price: 0,
    },
    {
        title: "Gus",
        description: "This is a grizzly I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/bear2.png",
        price: 0,
    }
    
    // after the third, all the rest are sorted by their collection in the gallery

]
// This is where all the blog posts will be stored.
export let blogPosts = [
    {
        title: "Stampede 2023",
        // notice that links have no uppercase of spaces or special characters
        link: "stampede-2023",
        teaser: "This past weekend I took part in an event that took my artistic journey to a whole new level: my first live painting experience.",
        thumbnail: "/bear2.png",
        image: "/bear2-high.png",
        hiddenTags: ["stampede", "calgary", "alberta", "canada", "2023", "rocky mountain animals"],
        body: [
            "This past weekend I took part in an event that took my artistic journey to a whole new level: my first live painting experience. I had the honour of being invited to paint live at the Calgary Stampede, allowing me to showcase my skills in real-time. In this blog post I want to share the story of this unforgettable event and the profound impact it had on my artistic growth!",
            "The painting took place in a bustling art gallery inside the Stampede grounds, The Western Oasis, where various artists from different backgrounds gathered to showcase their work. The atmosphere was electric, with vibrant colors, hundreds of paintings both big and small, and tons of Stampede-goers filling the grounds with energy. It was in this vibrant backdrop that I was invited to participate as a live painter.",
            "With the easel set up, brushes in hand, and my canvas before me, the moment arrived. Having never painted outside of my own studio before, I didn’t have any preconceived notions of what to expect in terms of if anyone would watch or be interested. To my surprise, in less than several minutes a large crowd had gathered and many were recording footage! Having gotten into my painting mindset, I didn’t realize I was being filmed until I broke my concentration to ask my sister a question, and when I turned from the canvas I finally saw everyone! What a surreal experience!",
            "As the Stampede carried on, I allowed myself to get lost in the rhythm of painting, interspersed with talking with some of the loveliest folks who stopped to say hi. (I appreciated every single one!) The longer the event carried on, the more relaxed I began to feel and became struck with one overwhelming feeling: I HAVE to do this again! It was so fun!",
            "What struck me most during my live painting experience was the powerful connection that occurred with some of the Stampede-goers. Some gazed quietly with curiosity and appreciation, while others watched intently, engaging in conversation and asking about my process and inspirations. The raw, unfiltered feedback provided an unexpected source of motivation and inspiration, pushing me to explore new ideas and techniques for the future.",
            "My first live painting experience was nothing short of transformational. It challenged me to step outside my comfort zone, to confront my fears, and to trust in my artistic intuition. Through this process, I discovered the power of vulnerability and the profound impact of sharing my art with others. It was an experience that not only enriched my artistic growth but also nurtured my confidence as an artist.",
            "This experience will forever hold a special place in my artistic journey, reminding me of the power of authenticity and the transformative magic that lies within every brushstroke! Thank you again to everyone who said hello, and to the Calgary Stampede gallery staff for their hard work in making this exhibition and live painting experience so successful and enjoyable.",
            "Stay tuned for my next live painting adventure",
            "B",
        ],
        date: "2023-07-17",
    },
]