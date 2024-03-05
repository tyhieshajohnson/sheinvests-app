import { user } from '../model/index.js';
import express from 'express';
import bodyParser from "body-parser";

const userRouter = express.Router()
// Fetch users
userRouter.get('/',(req, res)=>{
    try{
        user.fetchUsers(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed'
        })
    }
 })
  
 userRouter.get('/:id',(req, res)=>{
    try{
        user.fetchUsers(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed'
        })
    }
 })

 export{
    userRouter,
    express,
    bodyParser
 }