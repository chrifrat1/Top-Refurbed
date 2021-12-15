import UserDetails from "../models/user.js";

export const getUsers= async (req, res)=> { //get details from the database
    //res.send('Router is working (Get Student)');

    try {
        const allUsers= await UserDetails.find();
        res.status(200).json(allUsers);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createUser= async (req, res)=> {  //save details into the database
    //res.send('Router is working (Create Student)');

    const user=req.body;

    const newUser=new UserDetails(user);

    try {
        newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}



export const deleteStudent= async (req, res)=> {
    //res.send('Router is working (Create Student)');
    
    const id = req.params.id;
    //const newStudent=new StudentData(student);

    try {
        await StudentData.findByIdAndRemove(id).exec();
        res.send('Succesfully Deleted');
    } catch (error) {
        console.log(error);
    }
}