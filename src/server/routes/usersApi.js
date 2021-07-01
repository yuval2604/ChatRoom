import express from "express";
const usersApi = express.Router();

/* GET users listing. */
usersApi.get("/", function(req, res, next) {
  console.log('get "users" route hit');
  res.send({ users: ["joe", "bernie", "tulsi", "donald", "bill"] });
});

export default usersApi
