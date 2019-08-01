import http from "../services/httpService";

export default {
  // Get books from Google API
  getBooks: function(q) {
    return http.get("/api/google", {
      params: { q: "title:" + q }
    });
  },
  // Get all saved books
  getSavedBooks: function() {
    return http.get("/api//books");
  },
  // Delete saved book w/ given id
  deleteBook: function(id) {
    return http.delete("/api//books/" + id);
  },
  // Save book to database
  saveBook: function(bookData) {
    return http.post("/api//books", bookData);
  }
};