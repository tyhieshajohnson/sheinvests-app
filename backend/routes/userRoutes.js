import express from 'express';
import {userController} from '../controller/userController.js'

const router = express.Router();

// routing to add a user
router.route('/user/add').post(userController.addUser);

export default router;