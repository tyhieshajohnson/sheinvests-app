import express from "express";
import {
  // USERS
  userAdd,
  getClients,
  getClient,
  userEdit,
  userDelete,
  // INVEST
  investAdd,
  investsGet,
  investGet,
  investEdit,
  investDelete,
  userLogin,
  // CRYPTO
  cryptoAdd,
  cryptoGetAll,
  cryptoGet,
  cryptoEdit,
  cryptoDelete,
  // MARKET
  marketAdd,
  getAllMarkets,
  marketGet,
  marketEdit,
  marketDelete,
  // ORDER
  orderAdd,
  getAllOrders,
  orderGet,
  orderEdit,
  orderDelete,
} from "../controller/controller.js";
import auth from "../middleware/middleware.js";
import jwt from "jsonwebtoken";
import { getMarket } from "../model/index.js";

const router = express.Router();

// USERS ROUTES
// add a user
router.route("/user/add").post(userAdd);

// login n existing user
router.route("/user/login").post(userLogin);

// get ALL users
router.route("/users").get(getClients);

// get SPECIFIC user
router.route("/user/:id").get(getClient);

// editing user
router.route("/user/edit/:id").patch(auth, userEdit);

// delete user
router.route("/user/delete/:id").delete(auth, userDelete);

// INVESTMENTS ROUTES
// add an investment
router.route("/invest/add").post(auth, investAdd);

// get ALL investments
router.route("/investments").get(investsGet);

// get SPECIFIC investment
router.route("/invest/:user_id").get(investGet);

// edit SPECIFIC invest
router.route("/invest/edit/:user_id").patch(auth, investEdit);

// delete SPECIFIC investment
router.route("/invest/delete/:user_id").delete(auth, investDelete);

// CRYPTO ROUTES
// add new crypto
router.route("/crypto/add").post(auth, cryptoAdd);

// get all crypto
router.route("/crypto").get(cryptoGetAll);

// get SPECIFIC crypto
router.route("/crypto/:user_id").get(cryptoGet);

// edit SPECIFIC crypto
router.route("/crypto/edit").post(auth, cryptoEdit);

// delete SPECIFIC crypto
router.route("/crypto/delete/:user_id").delete(auth, cryptoDelete);


// ORDERS ROUTES
// add new order
router.route("/order/add").post(auth, orderAdd);

// get all orders
router.route("/orders").get(getAllOrders);

// get SPECIFIC order
router.route("/order/:user_id").get(orderGet);

// edit SPECIFIC order
router.route("/order/edit").post(auth, orderEdit);

// delete SPECIFIC order
router.route("/order/delete/:user_id").delete(auth, orderDelete);

// MARKETS ROUTES
// add new market
router.route("/market/add").post(auth, marketAdd);

// get all markets
router.route("/markets").get(getAllMarkets);

// get SPECIFIC markets
router.route("/market/:user_id").get(marketGet);

// edit SPECIFIC markets
router.route("/market/edit").post(auth, marketEdit);

// delete SPECIFIC markets
router.route("/market/delete/:user_id").delete(auth, marketDelete);

export default router;
