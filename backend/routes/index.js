import express from 'express';
import { userController } from '../controller/userController';

const router = express.Router();

router.route('/users/add').post(userRouter);

export default router;