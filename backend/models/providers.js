const mongoose = require('mongoose');
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// create a schema
const providerSchema = new Schema({
    _id: { type: ObjectId, auto: true },
    name: { type: String, required: true },
    lowestPrice: { type: Number, required: true },
    rating: { type: String, required: true },
    createdDate: { type: Date, required: true, default: Date.now }
}, {
    versionKey: false
});
console.log('in schema')
// make this available to our carts in our Node applications
module.exports = mongoose.model('providers', providerSchema);