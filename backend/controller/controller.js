import {
  // USERS
  addUser,
  getUser,
  getUsersByUsername,
  getUsers,
  editUser,
  deleteUser,
  // INVEST
  addInvest,
  getInvestments,
  getInvestment,
  editInvestment,
  deleteInvestment,
  // CRYPTO
  addCrypto,
  getAllCrypto,
  getCrypto,
  editCrypto,
  deleteCrypto,
  // MARKETS
  addMarket,
  getMarkets,
  getMarket,
  editMarket,
  deleteMarket,
  // ORDERS
  addOrder,
  getOrders,
  getOrder,
  editOrder,
  deleteOrder
} from "../model/index.js";
import express from "express";
import mysql from "mysql2";
import { config } from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Load environment variables from .env file
config();

//USERS
// 1. /add user
const userAdd = async (req, res) => {
  try {
    const { username, email, passwords } = req.body;

    // Validate that all required fields are present in the request body
    if (!username || !email || !passwords) {
      return res.status(400).send({ error: "Missing required fields" });
    }

    // Check if the user already exists
    const existingUser = await getUsersByUsername(username);

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    // Hash the password
    const hash = await bcrypt.hash(passwords, 10);

    // Call the addUser function with the hashed password
    await addUser(username, email, hash);

    // Generate JWT token
    const token = jwt.sign({ username: username }, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });

    res.status(201).json({ msg: "User added successfully", token });
  } catch (err) {
    console.error("Error in userAdd:", err);

    // Handle specific bcrypt errors
    if (err.message.includes("data and salt arguments required")) {
      return res.status(400).send({ error: "Invalid password provided" });
    }

    // Handle other errors
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

const userLogin = async (req, res) => {
  const { username, passwords } = req.body;

  try {
    // Check if username and passwords are present in the request body
    if (!username || !passwords) {
      return res.status(400).json({
        message: "Username and password are required",
      });
    }

    const [user] = await getUsersByUsername(username);
    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    const validPassword = await bcrypt.compare(passwords, user.passwords);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );

    res.json({ token, user });
  } catch (error) {
    console.error("Error in userLogin:", error);
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
};

// register user
const userRegister = async (req, res) => {
  const { username, email, passwords } = req.body;

  try {
    // Check if username, email, and passwords are present in the request body
    if (!username || !email || !passwords) {
      return res.status(400).json({
        message: "Username, email, and password are required",
      });
    }

    const existingUser = await getUsersByUsername(username);
    if (existingUser.length > 0) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    // Hash the password
    const hash = await bcrypt.hash(passwords, 10);

    // Call the addUser function with the hashed password
    await addUser(username, email, hash);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in userRegister:", error);
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
};

// Logout user
const userLogout = async (req, res) => {
  // No need to extract any data from the request
  try {
    // Clear the JWT cookie by setting an expired date in the past
    res.cookie('auth', '', { expires: new Date(0) });
    res.json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error in userLogout:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      details: error.message,
    });
  }
};

// 2. /get ALL users
const getClients = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ token: token });
  }
};

// 3. /get/:id SPECIFIC user
const getClient = async (req, res) => {
  try {
    const userId = +req.params.id;
    const user = await getUser(userId); // Fetch user data using getUser  function

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error handling client request:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//4. /edit a SPECIFIC user
const userEdit = async (req, res) => {
  try {
    const id = +req.params.id;
    const { username, email, passwords } = req.body;
    let existingUser = await getUser(id);

    if (!existingUser) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    let updatedUsername = username || existingUser.username;
    let updatedEmail = email || existingUser.email;
    let updatedPassword = passwords || existingUser.passwords;

    await editUser(updatedUsername, updatedEmail, updatedPassword, id);

    // Retrieve and send the updated user information
    const updatedUser = await getUser(id);
    res.json(updatedUser);
  } catch (error) {
    console.error("Error handling user edit:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 4. /delete SPECIFIC user
const userDelete = async (req, res) => {
  try {
    const userId = +req.params.id;

    // Log the userId to check if it's correct
    console.log("Deleting user with ID:", userId);

    // Attempt to delete the user
    const deletedUser = await deleteUser(userId);

    if (!deletedUser) {
      // User not found
      return res.status(404).send("User not found");
    }

    // User deleted successfully, retrieve updated user list
    const updatedUsers = await getUsers();

    res.json(updatedUsers);
  } catch (error) {
    // Error handling for any unexpected errors
    console.error("Error in userDelete:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

// INVESTMENTS
// /add an investment
const investAdd = async (req, res) => {
  try {
    const { crypto_name, amount } = req.body;
    const userId = req.user.id;
    console.log(req.user);
    // Validate that required fields are present in the request body
    if (!crypto_name || !amount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Use userId instead of user_id
    await addInvest(userId, crypto_name, amount);

    res.status(201).json({
      msg: "Invested successfully",
    });
  } catch (error) {
    console.error("Error in investAdd:", error);
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
};

//get ALL investments
const investsGet = async (req, res) => {
  const allInvestments = await getInvestments();
  res.send(allInvestments);
};

// /get SPECIFIC investments /:id
const investGet = async (req, res) => {
  try {
    const investments = await getInvestment(+req.params.user_id);
    res.json(investments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// /edit SPECIFC investments /:id
const investEdit = async (req, res) => {
  try {
    const { user_id, crypto_name, amount } = req.body;

    let updatedAmount;

    // Validate amount to ensure it's a numeric value
    if (!isNaN(amount)) {
      // Convert amount to a numeric value
      updatedAmount = parseFloat(amount);
    } else {
      return res.status(400).json({ error: "Amount must be a numeric value" });
    }

    // Retrieve existing investment information
    const existingInvestment = await getInvestments(req.params.user_id);

    console.log("Existing Investment:", existingInvestment);

    if (!existingInvestment) {
      res.status(404).json({ error: "Investment not found" });
      return;
    }

    // Update investment information
    const updatedUserId = user_id || existingInvestment.user_id;
    const updatedCryptoName = crypto_name || existingInvestment.crypto_name;

    console.log("Updated Amount:", updatedAmount);

    await editInvestment(
      req.params.user_id,
      updatedUserId,
      updatedCryptoName,
      updatedAmount
    );

    res.json({ success: true });
  } catch (error) {
    console.error("Error handling investment edit:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// /delete SPECIFIC investments /:user_id
const investDelete = async (req, res) => {
  try {
    const userId = +req.params.user_id;

    // Log the userId to check if it's correct
    console.log("Deleting investment with user ID:", userId);

    // Attempt to delete the investment
    const deletedInvestment = await deleteInvestment(userId);

    if (!deletedInvestment) {
      // Investment not found
      return res.status(404).send("Investment not found");
    }

    // Investment deleted successfully, retrieve updated investment list
    const updatedInvestments = await getInvestments();

    res.json(updatedInvestments);
  } catch (error) {
    // Error handling for any unexpected errors
    console.error("Error in investDelete:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

// CRYPTO
// 1. /add crypto
const cryptoAdd = async (req, res) => {
  try {
    const { crypto_name, crypto_description } = req.body;
    const cryptoName = req.user.id;
    console.log(req.user);

    if (!crypto_name || !crypto_description) {
      return res.status(500).json({ error: "Error creating crypto" });
    }

    await addCrypto(crypto_name, crypto_description);

    res.status(200).json({
      msg: "Success",
    });
  } catch (error) {
    console.error("Error In cryptoAdd Controller:", error);
    res.status(500).json({
      error: "Internal Server Error - Controler cryptoAdd",
      details: error.message,
    });
  }
};

//2. /get crypto
const cryptoGetAll = async (req, res) => {
  const allCrypto = await getAllCrypto();
  res.send(allCrypto);
};

// 3. /get SPECIFIC crypto /:id
const cryptoGet = async (req, res) => {
  res.send(await getCrypto(+req.params.user_id));
};

// 4. /edit SPECIFIC crypto /:id
const cryptoEdit = async (req, res) => {
  try {
    const { crypto_description } = req.body;

    const existingCrypto = await getCrypto(req.params.crypto_name);

    if (!existingCrypto) {
      res.status(404).json({ error: "Crypto not found" });
      return;
    }

    // Update the crypto description
    await editCrypto(existingCrypto.crypto_name, crypto_description);

    // Update the existingCrypto object with the updated crypto description
    existingCrypto.crypto_description = crypto_description;

    res.json({ success: true });
  } catch (error) {
    console.error("Error handling crypto edit:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// delete SPECIFIC crypto
const cryptoDelete = async (req, res) => {
  try {
    const cryptoId = req.params.crypto_id;
    console.log("Deleting Crypto With ID:", cryptoId);
    const cryptoDeleted = await deleteCrypto(cryptoId);
    if (!cryptoDeleted) {
      return res.status(404).send("Crypto Not Found");
    }

    const updatedCrypto = await getAllCrypto();
    res.json(updatedCrypto);
  } catch (error) {
    console.error("Error In Deleting Crypto:", error.message);
    res.status(500).send("Internal Server Error - Deleting Crypto");
  }
};

// MARKET
// add
const marketAdd = async (req, res) => {
  try {
    const { market_id, market_name, current_price } = req.body;
    const marketId = req.market_id;
    console.log(req.markets);
    if (!market_id || !market_name || !current_price) {
      return res.status(500).json({ error: "Error In Creating Market" });
    }
    await addMarket(market_id, market_name, current_price);
    res.status(200).json({
      msg: "Success",
    });
  } catch (error) {
    console.error("Error In Creating  A Market:", error);
    res.status(500).json({
      error: "Internal Server Error - Creating A Market",
      details: error.message,
    });
  }
};
// get
const getAllMarkets = async (req, res) => {
  const markets = await getMarkets();
  res.send(markets);
};
// get :id
const marketGet = async (req, res) => {
  try {
    const market = await getMarket();
    res.status(200).json(market);
  } catch (error) {
    console.error("Error In Fetching Markets:", error.essage);
    res.status(500).json({});
  }
};
// edit
const marketEdit = async (req, res) => {
  try {
    const { market_id, market_name, current_price } = req.body;
    const existingMarket = await getMarkets(req.params.market_id);
    if (!existingMarket) {
      res.status(404).json({ error: "Market Not Found" });
      return;
    }
    const updatedMarket = market_id || existingMarket.market_id;
    const updatedMarketName = market_name || existingMarket.market_name;
    const updatedCurrentPrice = current_price || existingMarket.current_price;

    await editMarket(
      req.params.market_id,
      updatedMarketName,
      updatedMarket,
      updatedCurrentPrice
    );
    res.json({ success: true });
  } catch (error) {
    console.error("Error Editing Market:", error.message);
    res.status(500).json({ error: "Internal Server Error - Editing Market" });
  }
};
// delete
const marketDelete = async (req, res) => {
  try {
    const marketId = +req.params.user_id;
    console.log("Deleting Market:", marketId);
    const deletedMarket = await deleteMarket(marketId);
    if (!deletedMarket) {
      return res.status(404).send("Market not found");
    }
    const updatedMarket = await deleteMarket();
    res.json(updatedMarket);
  } catch (error) {
    console.error("Error In Deleting Market:", error.message);
    res.status(500).send("Internal Server Error - Deleting Market");
  }
};

// ORDERS
// add
const orderAdd = async (req, res) => {
  try {
    const { order_id, user_id, market_id, order_type, quantity, price } = req.body;

    // Check if any required fields are missing
    if (!order_id || !user_id || !market_id || !order_type || !quantity || !price) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await addOrder(order_id, user_id, market_id, order_type, quantity, price);

    res.status(200).json({
      msg: "Success",
    });
  } catch (error) {
    console.error("Error Creating Order:", error);
    res.status(500).json({
      error: "Internal Server Error - Error Creating Order",
      details: error.message,
    });
  }
};

// get ALL
const getAllOrders = async (req, res) => {
  const allOrders = await getOrders();
  res.send(allOrders);
};
// get :id
const orderGet = async (req, res) => {
  res.send(await getOrder(+req.params.user_id));
};
// edit
const orderEdit = async (req, res) => {
  try {
    const { order_id, user_id, market_id, order_type, quantity, price } = req.body;

    const existingOrder = await editOrder(req.params.order_id);

    if (!existingOrder) {
      res.status(404).json({ error: "Order Not Found" });
      return;
    }

    const updateOrder = order_id || existingOrder.order_id;
    const updateUserId = user_id || existingOrder.user_id;
    const updateMarketId = market_id || existingOrder.market_id;
    const updateOrderType = order_type || existingOrder.order_type;
    const updateQuantity = quantity || existingOrder.quantity;
    const updatePrice = price || existingOrder.price;

    await editOrder(updateOrder, updateUserId, updateMarketId, updateOrderType, updateQuantity, updatePrice);

    res.json({ success: true });
  } catch (error) {
    console.error("Error Updating Order:", error.message);
    res.status(500).json({ error: "Internal Server Error - Error Updating Order" });
  }
};
// delete
const orderDelete = async (req, res) => {
  try {
    const orderId = req.params.order_id;
    console.log("Deleting Order ID:", orderId);
    
    const orderDeleted = await deleteOrder(orderId);
    
    if (!orderDeleted) {
      return res.status(404).send("Order Not Found");
    }

    console.log("Order deletion result:", orderDeleted);
    res.status(200).json({ success: true, message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error In Deleting Order:", error.message);
    res.status(500).send("Internal Server Error - Deleting Order");
  }
};

// export to routes
export {
  // USERS
  userAdd,
  userLogin,
  userRegister,
  userLogout,
  getUsers,
  getUser,
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
}; 