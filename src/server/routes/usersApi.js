import express from "express";
import bodyParser from 'body-parser';
import User from '../models/User.js';
import mongoose from "mongoose";
import connectDB from "../db.js";
import dotenv from "dotenv";

const usersApi = express.Router();

usersApi.post("/register", async (req, res) => {
  dotenv.config({ path: ".env" });
  connectDB();
  const { name, password } = req.body;

  await new User({
    name: name,
    password: password
  }).save().then((newUser) => {
    res.send(newUser);
    console.log('new user created:' + newUser);
  });
});


/* GET users listing. */
usersApi.get("/", function (req, res, next) {
  console.log('get "users" route hit');
  res.send({ users: ["joe", "bernie", "tulsi", "donald", "bill"] });
});




export default usersApi
