import User from "../modules/user.js";
import bcryptjs from "bcryptjs";
export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("Registration was successful");
  } catch (error) {
    next(error);
  }
};
