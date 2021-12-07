import mongoose from 'mongoose';

const orderDetailSchema= mongoose.Schema({
    item: String,
    name: String,
    surname: String,
    road: String,
    number: String,
    city: String,
    postcode: String,
    cardnum: String,
    expirydate: String,
    cvv: String,
});

const details= mongoose.model('details',orderDetailSchema);
export default details;
