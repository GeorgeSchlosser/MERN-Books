const mongoose = require("mongoose");
const Book = require("../models/book");

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        family: 4 // Use IPv4, skip trying IPv6
    }
);

const booksSeed = [
    {
        authors: ["Chuck Palahniuk"],
        googleId: "hoGkPfds4tAC",
        title: "Fight Club",
        subtitle: "A Novel",
        link: "https://play.google.com/store/books/details/Chuck_Palahniuk_Fight_Club_A_Novel?id=hoGkPfds4tAC&source=gbs_api",
        description: "Every weekend, in basements and parking lots across the country, young men with good white-collar jobs and absent fathers take off their shoes and shirts and fight each other barehanded for as long as they have to. Then they go back to those jobs with blackened eyes and loosened teeth and the sense that they can handle anything. Fight Club is the invention of Tyler Durden, projectionist, waiter and dark, anarchic genius. And it's only the beginning of his plans for revenge on a world where cancer support groups have the corner on human warmth. The first rule about fight club is you don't talk about fight club.",
        image: "https://books.google.com/books/content/images/frontcover/hoGkPfds4tAC?fife=w200-h300&source=gbs_api"
    }
];