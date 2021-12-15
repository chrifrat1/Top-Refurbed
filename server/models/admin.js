import mongoose from 'mongoose';
//the mongose schema is set up in order to define which type of values will be received from 
//the front end and how the will be saved into the database
const adminSchema= mongoose.Schema({
    user: String,
    password: String,
    
    
});

const admin= mongoose.model('admin',adminSchema);
export default admin;
