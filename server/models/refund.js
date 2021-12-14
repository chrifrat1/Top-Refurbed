import mongoose from 'mongoose';

const RefundSchema= mongoose.Schema({
    item: String,
    name: String,
    surname: String,
    comment: String,
    status: String,
});

const refund= mongoose.model('refund',RefundSchema);
export default refund;
