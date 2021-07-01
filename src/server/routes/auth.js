import express from "express";
import { register, login, getLoggedUser } from "../controllers/auth";

import { protect } from "../middleware/auth";

const auth = express.Router();

auth.route("/register").post(register);

auth.route("/login").post(login);

auth.route("/me").get(protect, getLoggedUser);

export default auth;
