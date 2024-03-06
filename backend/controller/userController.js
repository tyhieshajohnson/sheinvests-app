import { addUser } from "../model/usersModel.js";
import express from "express";
// import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import {config} from "dotenv"
config()

// Controller functions for users
// const userController = {
//   // adding a user
//   addUser: async (req, res) => {
//     try {
//       // destructuring {} from req.body
//       let { username, email, passwords 
//       } = req.body;
//       bcrypt.hash(passwords, 10, async (err, hash) => {
//         //error handling bcrypt
//         // if (e) throw e;
//         //officially adding new user
//         let newUser = await addUser(username, email, hash);
//         //sending new user to json
//         res.status(200).json(newUser);
//       });
//     } catch (e) {
//       res.json({
//         status: res.status(400),
//         msg: "Failed",
//       });
//     }
//   },
// };
const userController = async (req, res) => {
  let {username, email, password} = req.body;
  try{
    const hash = await bcrypt.hash(password,10);
    await addUser(username, email, password);
    res.send({
      msg:"account created successfully",
    });
  } catch (err) {
    res.status(500).send("Failed");
  }
  };
  
  
  export { userController };


// export { userController };




// Fetch users
// userRouter.get('/',(req, res)=>{
//     try{
//         fetchUser.fetchUsers(req, res)
//     }catch(e) {
//         res.json({
//             status: res.statusCode,
//             msg: 'Failed'
//         })
//     }
//  })