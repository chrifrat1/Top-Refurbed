import Details from "../models/orderDetails.js";

export const getDetails= async (req, res)=> {
    //res.send('Router is working (Get Student)');

    try {
        const allOrders= await Details.find();
        res.status(200).json(allOrders);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveDetails= async (req, res)=> {
    //res.send('Router is working (Create Student)');

    const details=req.body;

    const newOrder=new Details(details);

    try {
        newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

