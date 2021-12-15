import mongoose from 'mongoose';
//the mongose schema is set up in order to define which type of values will be received from 
//the front end and how the will be saved into the database
const userSchema= mongoose.Schema({
    username: String,
    email: String,
    password: String,
    
});

const user= mongoose.model('user',userSchema);
export default user;
