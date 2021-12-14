import express from 'express';
import { getDetails } from '../controllers/admin.js';


const router = express.Router();


router.get('/', getDetails);


export default router;