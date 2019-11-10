const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bookSchema = new schema({
    isbn: {
        type: String,
        required: [true, `ISBN can't be blank`],
        trim: true,
        dropDups: true,
        validate: [
            async val => {
                return await bookModel.count({isbn : val})
                            .then(result => !(result > 0));
        }, 'ISBN must have a unique value']
    },
    name: {
        type: String,
        required: [true, `Name can't be blank`],
        trim: true,
        dropDups: true
    },
    data_of_publish: {
        type: Date,
        required: true
    },
    no_of_pages: {
        type: Number
    },
    authors: {
        type: [{
            type: String,
            max: 100
        }],
        validate: [val => val.length > 0, 'Atleast one author details required!']
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

/*
schema.pre('save', cb => {
    cb();
});
*/

/*
schema.post('save', cb => {
    cb();
});
*/
const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;

