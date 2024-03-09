import express from "express";
import { userAdd, getClients, getClient, userEdit, userDelete, investAdd } from "../controller/controller.js";

const router = express.Router();

// USERS ROUTES
// add a user
router.route('/users/add').post(userAdd);

// get ALL users
router.route('/users').get(getClients)

// get SPECIFIC user
router.route('/user/:id').get(getClient);

// editing user
router.route('/user/edit/:id').patch(userEdit);

// delete user
router.route('/user/delete/:id').delete(userDelete);

// INVESTMENTS ROUTES
router.route('/invest/add').post(investAdd);

// export { userAdd, investAdd };
export default router;