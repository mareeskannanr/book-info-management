const router = require('express').Router;
const controller = require('../controllers/BookController');

const routes = router().get("/", (req, res) => {
    res.json({
        message: "Application is UP!"
    });
});

//Book API
const BOOK_API = '/api/books';
routes.route(BOOK_API)
        .post(controller.addBook)
        .get(controller.getAllBooks)
        .put(controller.updateBookInfo);

routes.route(`${BOOK_API}/:id`)      
        .get(controller.getBookById)
        .delete(controller.removeBookById);

module.exports = routes;