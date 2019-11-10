const Book = require('../models/Book');

module.exports = {
    async addBook(req, res) {
        if(!req.body) {
            return res.status(400).json({
                message: 'Book Information is required!'
            }); 
        }

        let book = new Book(req.body);
        book.save((err, result) => {
            if(err) {
                if(err.name === 'ValidationError') {
                    return res.status(400).json(err);
                }

                return res.status(500).json(err);
            }

            return res.status(201).json(result);
        });
    },
    async getAllBooks(req, res) {
        return await Book.find()
                .then(book => res.status(200).json(book))
                .catch(err => res.status(500).json(err));
    },
    async getBookById(req, res) {
        return await Book.findById(req.params.id).then(
            result => {
                if(result != null) {
                    return res.status(200).json(result);
                }
                
                return res.status(404).json({
                    message: "Book Info doesn't exists! "
                });
            }
        ).catch(
            err => res.status(500).json(err)
        );
    },
    async removeBookById(req, res) {
        return await Book.findByIdAndRemove(req.params.id).then(
            result => {
                if(result != null) {
                    return res.status(204).json(result);
                }
                
                return res.status(404).json({
                    message: "Book Info doesn't exists! "
                });
            }
        ).catch(
            err => res.status(500).json(err)
        );
    },
    async updateBookInfo(req, res) {

        if(!req.body) {
            return res.status(400).json({
                message: 'Book Information is required!'
            }); 
        }

        if(!req.body._id || req.body._id.toString().trim() === '') {
            return res.status(400).json({
                message: 'Book Id is required to update!'
            }); 
        }

        return await Book.findByIdAndUpdate(req.body._id, {$set: req.body}).then(
            result => {
                if(result != null) {
                    return res.status(200).json({
                        message: "Book Information updated successfully!"
                    });
                }
                
                return res.status(404).json({
                    message: "Book Info doesn't exists! "
                });
            }
        ).catch(
            err => res.status(500).json(err)
        );
    }
};