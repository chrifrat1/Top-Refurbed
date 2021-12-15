import mongoose from 'mongoose';
//the mongose schema is set up in order to define which type of values will be received from 
//the front end and how the will be saved into the database
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
