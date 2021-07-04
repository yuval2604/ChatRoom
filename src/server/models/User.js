import mongoose from "mongoose";
const Schema = mongoose.Schema;

// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

const User = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 1,
    select: false,
  },
  chats: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
  ],
});

// // Encrypt password using bcrypt
// schema.pre("save", async function (next) {
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// // Sign JWT and return
// schema.methods.getSignedJwtToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE,
//   });
// };

// // Match user entered password to hashed password stored in database
// schema.methods.matchPasswords = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };
export default mongoose.model("User", User);
