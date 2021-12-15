import express from 'express';
import { getDetails,saveDetails } from '../controllers/details.js';
//define the funtion that is going to be run (fetching or saving)
const router = express.Router();


router.get('/', getDetails);
router.post('/', saveDetails);
//router.delete('/:id', deleteStudent);

export default router;