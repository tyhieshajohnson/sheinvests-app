import { addUser } from "../model/usersModel.js";;
// import express from "express";
// import bodyParser from "body-parser";
import bcrypt from "bcrypt";

// Controller functions for users
const userController = {
  // adding a user
  addUser: async (req, res) => {
    try {
      // destructuring {} from req.body
      const { username, email, password } = req.body;
      bcrypt.compare(password, 10, async (err, hash) => {
        //error handling bcrypt
        if (err) throw err;
        //officially adding new user
        const newUser = await addUser(username, email, hash);
        //sending new user to json
        res.status(200).json(newUser);
      });
    } catch (e) {
      res.json({
        status: res.status(400),
        msg: "Failed",
      });
    }
  },
};


export { userController };




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