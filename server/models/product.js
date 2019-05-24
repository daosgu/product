const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productmanagment',  {useNewUrlParser: true});

mongoose.model("product", new mongoose.Schema({
        urlimage: {type: String},
        title: {
                type: String, 
                required: [true, "The title can not be empty."], 
                minlength: [4, "The title length must have at least 4 characters.."],
                maxlength: [40, "The title is longer than the maximum allowed length (40 Characters max)."],
            },
        price: {
                type: Number, 
                required: [true, "The price can not be empty."], 
                min: [1, "The price can not be 0 or negative."],
            },
    }, {timestamps: true})
);

let Product = mongoose.model("product");


module.exports = { Product };