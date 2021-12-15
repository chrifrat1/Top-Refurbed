import express from 'express';
import { getDetails } from '../controllers/admin.js';

//define the funtion that is going to be run (fetching or saving)
const router = express.Router();


router.get('/', getDetails);


export default router;