const mongoose = require('mongoose');
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// create a schema
const providerDetailsSchema = new Schema({
    _id: { type: ObjectId, auto: true },
    maxSpeed: { type: String, required: true },
    description: { type: String},
    contactNo: { type: Number, required: true },
    email:{ type: String, required:true,unique:true},
    image:{ type: String },
    url : { type : String, required : true},
    providerId : { type: ObjectId, ref: 'providers' },
    createdDate: { type: Date, required: true, default: Date.now }
}, {
    versionKey: false
});
// make this available to our carts in our Node applications
module.exports = mongoose.model('providersdetails', providerDetailsSchema);