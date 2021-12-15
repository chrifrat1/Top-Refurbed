import mongoose from 'mongoose';
//the mongose schema is set up in order to define which type of values will be received from 
//the front end and how the will be saved into the database
const RefundSchema= mongoose.Schema({
    item: String,
    name: String,
    surname: String,
    comment: String,
    status: String,
});

const refund= mongoose.model('refund',RefundSchema);
export default refund;
