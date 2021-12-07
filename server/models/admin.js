import mongoose from 'mongoose';

const adminSchema= mongoose.Schema({
    user: String,
    password: String,
    
    
});

const admin= mongoose.model('admin',adminSchema);
export default admin;
