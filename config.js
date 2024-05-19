// user page config
const ITEMS_PER_PAGE = 3
const categories = [
    { 
        title: "Czasopisma",
        subTitle: "Czasopisma radiowe",
        name: "czasopisma",
        template: "./src/templates/radia-list-template.js",
    },
    {
        title: "Lampy",
        subTitle: "Opisy lamp radiowych",
        name: "lampy",
        template: "./src/templates/radia-list-template.js",
    },
    {
        title: "Radia",
        subTitle: "Eksponaty radiowe",
        name: "radia",
        template: "./src/templates/radia-list-template.js",
    },
]

module.exports = {
    ITEMS_PER_PAGE,
    categories,
};