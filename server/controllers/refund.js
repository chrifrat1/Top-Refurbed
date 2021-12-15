import Refund from "../models/refund.js";

export const getDetails= async (req, res)=> { //get details from the database
    //res.send('Router is working (Get Student)');

    try {
        const allRefunds= await Refund.find();
        res.status(200).json(allRefunds);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveDetails= async (req, res)=> {   //save details into the database
    //res.send('Router is working (Create Student)');

    const refund=req.body;

    const newRefund=new Refund(refund);

    try {
        newRefund.save();
        res.status(201).json(newRefund);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

