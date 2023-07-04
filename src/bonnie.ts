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
    body: string,
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
        title: "Swan",
        description: "This is the first piece I ever made.",
        belongsToCollection: "First Collection",
        image: "/swan.png",
        price: 100,
    },
    {
        title: "Wolf",
        description: "This is a wolf I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/wolf.png",
        price: 390,
    },
    {
        title: "Horse",
        description: "This is a horse I saw in the Rocky Mountains.",
        belongsToCollection: "Regular Animals",
        image: "/horse.png",
        price: 785,
    },
    {
        title: "Goat",
        description: "This is a goat I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/goat.png",
        price: 1468,
    },
    {
        title: "Eagle",
        description: "This is an eagle I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/eagle.png",
        price: 2020,
    },
    {
        title: "Chipmunk",
        description: "This is a chipmunk I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/chipmunk.png",
        price: 3000,
    },
    { 
        title: "Other Goat",
        description: "This is another goat I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/goat2.png",
        price: 4000,
    },
    {
        title: "Wolf 2",
        description: "This is a wolf I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/wolf2.png",
        price: 5000,
    },
    {
        title: "Wolf Pack",
        description: "This is a pack of wolves I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/wolfPack.png",
        price: 6000,
    },
    {
        title: "Mountain Cat",
        description: "This is a mountain cat I saw in the Rocky Mountains.",
        belongsToCollection: "Rocky Mountain Animals",
        image: "/mountainCat.png",
        price: 7000,
    }

    // after the third, all the rest are sorted by their collection in the gallery

]
// This is where all the blog posts will be stored.
export let blogPosts = [
    {
        title: "The First Blog Post",
        teaser: "This is the first blog post I ever made.",
        image: "/swan.png",
        hiddenTags: ["hidden"],
        body: `
        
        This is the first blog post I ever made.

        I can write separate paragraphs because the backticks see it.

        # I learned to paint inside my brain.

        ### Bonnie Godin

        ## And markdown even works probably I think let's see.
        
        `,
        date: "2021-01-01",
    },
    {
        title: "The Second Blog Post",
        teaser: "This is the second blog post I ever made.",
        image: "/wolf.png",
        hiddenTags: ["hidden"],
        body: `

        This is the second blog post I ever made.

        I can write separate paragraphs because the backticks see it.

        # I learned to paint inside my brain.

        ### Bonnie Godin

        ## And markdown even works probably I think let's see.

        `,
        date: "2021-01-02",
    },
    {
        title: "The Third Blog Post",
        teaser: "This is the third blog post I ever made.",
        image: "/horse.png",
        hiddenTags: ["hidden"],
        body: `

        This is the third blog post I ever made.

        I can write separate paragraphs because the backticks see it.

        # I learned to paint inside my brain.

        ### Bonnie Godin

        ## And markdown even works probably I think let's see.

        `,
        date: "2021-01-03",
    },
]