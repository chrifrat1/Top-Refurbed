import express from 'express';
import { getDetails,saveDetails } from '../controllers/refund.js';

const router = express.Router();


router.get('/', getDetails);
router.post('/', saveDetails);


export default router;