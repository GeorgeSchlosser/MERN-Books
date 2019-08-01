const axios = require("axios");
const db = require("../models");

// Define methods for googleController & ensure books returned from API have title, author, link, description, and image
module.exports = {
    findAll: function (req, res) {
        // findall searches Google Books API and returns only entries already saved
        const { query: params } = req;
        console.log("\r\rBook\r\r");
        axios
            .get("https://www.googleapis.com/books/v1/volumes", {
                params
            })
            .then(results =>
                results.data.items.filter(
                    results =>
                        result.volumeInfo.title &&
                        result.volumeInfo.infoLink &&
                        result.volumeInfo.authors &&
                        result.volumeInfo.description &&
                        result.volumeInfo.imageLinks &&
                        result.volumeInfo.imageLinks.thumbnail
                )
            )
            .then(books => res.json(books));
    }

};