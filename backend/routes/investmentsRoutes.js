import express from 'express';
import {investments} from '../controller/investments.js'

import { config } from "dotenv";
config();

const router = express.Router();  

// routing to add a user
router.route('/users/investments').post(investments);

export default router;   