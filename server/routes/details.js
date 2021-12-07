import express from 'express';
import { getDetails,saveDetails } from '../controllers/details.js';

const router = express.Router();


router.get('/', getDetails);
router.post('/', saveDetails);
//router.delete('/:id', deleteStudent);

export default router;