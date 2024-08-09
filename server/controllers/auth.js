import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const registerUser = async (req, res) => {
  const { handle, email, password, category } = req.body;
  console.log("Body:", req.body);
  try {
    const defaultLink = {
      url: "https://github.com/realg701",
      title: "GitHub",
      icon: "",
    };
    const user = await User.create({
      handle,
      email,
      password,
      role: category,
      links: [defaultLink],
    });
    const token = jwt.sign({ email: email }, process.env.SECRET_JWT);
    console.log("user", user);
    return res.json({
      message: "user created",
      status: "success",
      token: token,
      id: user._id,
    });
  } catch (error) {
    if (error.code === "11000") {
      return res.json({
        message: "email or handle already exist",
        status: "error",
      });
    }
    return res.json({
      message: error.message,
      status: "error",
    });
  }
};
export const loginUser = (req, res) => {
  const { email, password } = req.body;
  try {
    const user = User.findOne({ email: email, password: password });
    console.log("Logged in User", user);
    if (!user) {
      return res.json({ status: "not found", error: "Invalid Credentials" });
    }
    const token = jwt.sign({ email: email }, process.env.SECRET_JWT);
    return res.json({
      message: "user found",
      status: "success",
      token: token,
      id: user._id,
    });
  } catch (error) {
    return res.json({
      message: error.message,
      status: "error",
    });
  }
};
