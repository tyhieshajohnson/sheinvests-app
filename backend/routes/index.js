import express from "express";
import { userAdd, getUsers, getUser, investAdd  } from "../controller/controller.js";

const router = express.Router();

// USERS ROUTES
// add a user
router.route('/users/add').post(userAdd);

// get ALL users
router.route('/users/get').get(getUsers)

// get SPECIFIC user
router.route('/users/get/id').get(getUser)

// INVESTMENTS ROUTES
router.route('/invest/add').post(investAdd);

// export { userAdd, investAdd };
export default router;