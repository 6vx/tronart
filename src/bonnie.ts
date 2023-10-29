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

    description: "Welcome To The Gallery",

    aboutBioImage: '/bonnieLifestyle3.png',

    logoImage: '/sig.png',

    favicon: '/favicon.png',

    instagramHandle: 'bonniegodinart',

    carouselImages: [
        '/StampedeBannerTwo.jpg', 
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

    shortDescription: "An *artist* **first** and *paramedic* **second**, Bonnie creates vibrant art that reflects reverence for the bright side of life. \n\n She believes all of life's pains and hardships have mirror images of beauty and joy. \n\n She channels these images onto her canvases through bright colours, dynamic brush strokes and uplifting subject matter",
                         
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
        collectionImage: "/mountainCat.png",
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
    },
    {
        title: "",
        description: "",
        belongsToCollection: "Rainbow Series",
        image: "/.png",
        price: 0,
    },
    {
        title: "",
        description: "",
        belongsToCollection: "Rainbow Series",
        image: "/.png",
        price: 0,
    },
    {
        title: "",
        description: "",
        belongsToCollection: "Rainbow Series",
        image: "/.png",
        price: 0,
    },
    {
        title: "",
        description: "",
        belongsToCollection: "Rainbow Series",
        image: "/.png",
        price: 0,
    },
    {
        title: "",
        description: "",
        belongsToCollection: "Rainbow Series",
        image: "/.png",
        price: 0,
    },
    {
        title: "",
        description: "",
        belongsToCollection: "Rainbow Series",
        image: "/.png",
        price: 0,
    },
    {
        title: "",
        description: "",
        belongsToCollection: "Rainbow Series",
        image: "/.png",
        price: 0,
    },
    
    // after the third, all the rest are sorted by their collection in the gallery

]