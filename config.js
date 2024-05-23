// user page config
const ITEMS_PER_PAGE = 3
const categories = [
    { 
        name: "czasopisma",
        title: "Czasopisma",
        subTitle: "Czasopisma radiowe",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque, odit velit sint similique? Asperiores ratione       aperiam tempora, alias corrupti deleniti quaerat molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        pageTemplate: "./src/templates/radia-template.js",
        listTemplate: "./src/templates/radia-list-template.js",
        image: "../images/category-czasopisma.jpg",
    },
    {
        name: "lampy",
        title: "Lampy",
        subTitle: "Opisy lamp radiowych",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque, odit velit sint similique? Asperiores ratione       aperiam tempora, alias corrupti deleniti quaerat molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        pageTemplate: "./src/templates/radia-template.js",
        listTemplate: "./src/templates/radia-list-template.js",
        image: "../images/category-lampy.jpg",
    },
    {
        name: "radia",
        title: "Radia",
        subTitle: "Eksponaty radiowe",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque, odit velit sint similique? Asperiores ratione       aperiam tempora, alias corrupti deleniti quaerat molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        pageTemplate: "./src/templates/radia-template.js",
        listTemplate: "./src/templates/radia-list-template.js",
        image: "../images/category-radia.jpg",
    },
]

module.exports = {
    ITEMS_PER_PAGE,
    categories,
};