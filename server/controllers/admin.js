import Details from "../models/admin.js";

export const getDetails= async (req, res)=> {
    //res.send('Router is working (Get Student)');

    try {
        const allOrders= await Details.find();
        res.status(200).json(allOrders);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}