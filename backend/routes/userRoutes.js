import express from 'express';
import {userController} from '../controller/userController.js'

import { config } from "dotenv";
config();

const router = express.Router();

// routing to add a user
router.route('/users/add').post(userController);

export default router;