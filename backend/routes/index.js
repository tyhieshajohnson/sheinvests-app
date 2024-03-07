import express from "express";
import { userAdd, investAdd  } from "../controller/controller.js";

const router = express.Router();

// USERS ROUTES
router.route('/users/add').post(userAdd);       

// INVESTMENTS ROUTES
router.route('/invest/add').post(investAdd);

// export { userAdd, investAdd };
export default router;