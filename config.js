// user page config
const ITEMS_PER_PAGE = 3
const categories = [
    { 
        name: "czasopisma",
        title: "Czasopisma",
        subTitle: "Czasopisma radiowe",
        description: "Czasopisma polskie i nie tylko, dotyczące tematyki radiowej.",
        template: "./src/templates/radia-list-template.js",
    },
    {
        name: "lampy",
        title: "Lampy",
        subTitle: "Opisy lamp radiowych",
        description: "Lampy radiowe w wersjach oryginalnych i zamienniki.",
        template: "./src/templates/radia-list-template.js",
    },
    {
        name: "radia",
        title: "Radia",
        subTitle: "Eksponaty radiowe",
        description: "Polskie i nie tylko odbiorniki radiowe z charakterem.",
        template: "./src/templates/radia-list-template.js",
    },
]

module.exports = {
    ITEMS_PER_PAGE,
    categories,
};