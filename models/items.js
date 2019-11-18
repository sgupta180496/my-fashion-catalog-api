const mongoose = require('mongoose');
const Schema = mongoose.Schema;




//create item schema and model
const ItemSchema = new Schema({
name: {
    type: String,
    required: [true, 'Name field is required']
},
brand: {
    type: String,
    required: [true, 'Brand field is required']
},
description: {
    type: String,
    required: [true, 'Description field is required']
},
material: {
    type: String,
    required: [true, 'Material field is required']
},
colours: {
    type: String,
    required: [true, 'colours field is required']
},
price: {
    type: Number,
    required: [false]
}
});

const Item = mongoose.model('item', ItemSchema);
module.exports = Item;
