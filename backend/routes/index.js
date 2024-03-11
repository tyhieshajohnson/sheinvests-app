import express from "express";
import { userAdd, 
    getClients, 
    getClient, 
    userEdit, 
    userDelete, 
    investAdd, 
    investsGet, 
    investGet, 
    investEdit, 
    investDelete,
    userLogin } from "../controller/controller.js";
import auth from "../middleware/middleware.js"
import jwt from "jsonwebtoken";

const router = express.Router();

// USERS ROUTES
// add a user
router.route('/users/add').post(auth, userAdd);

// login n existing user
router.route('/user/login').get(auth, userLogin);

// get ALL users
router.route('/users').get(getClients)

// get SPECIFIC user
router.route('/user/:id').get(getClient);

// editing user
router.route('/user/edit/:id').patch(userEdit);

// delete user
router.route('/user/delete/:id').delete(auth, userDelete);

// INVESTMENTS ROUTES
// add an investment
router.route('/invest/add').post(investAdd);

// get ALL investments
router.route('/investments').get(investsGet);

// get SPECIFIC investment
router.route('/invest/:user_id').get(investGet)

// edit SPECIFIC invest
router.route('/invest/edit/:user_id').patch(auth, investEdit)

// delete SPECIFIC investment
router.route('/invest/delete/:user_id').delete(investDelete)

export default router;