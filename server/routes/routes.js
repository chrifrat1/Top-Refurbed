import express from 'express';
import { getUsers,createUser } from '../controllers/user.js';
import { getDetails,saveDetails } from '../controllers/details.js';
//import { getDetails } from '../controllers/user.js';
//define the funtion that is going to be run (fetching or saving)
const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/', getDetails);
router.post('/', saveDetails);
//router.delete('/:id', deleteStudent);

export default router;
