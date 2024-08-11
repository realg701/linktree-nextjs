import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const registerUser = async (req, res) => {
  const { handle, email, password, category } = req.body;
  console.log("Body:", req.body);
  try {
    const defaultLink = {
      url: "https://github.com/realg701",
      title: "GitHub",
      icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBkPSJNMTIgMi4yNDdhMTAgMTAgMCAwIDAtMy4xNjIgMTkuNDg3Yy41LjA4OC42ODctLjIxMi42ODctLjQ3NSAwLS4yMzctLjAxMi0xLjAyNS0uMDEyLTEuODYyLTIuNTEzLjQ2Mi0zLjE2My0uNjEzLTMuMzYzLTEuMTc1YTMuNjQgMy42NCAwIDAgMC0xLjAyNS0xLjQxM2MtLjM1LS4xODctLjg1LS42NS0uMDEzLS42NjJhMiAyIDAgMCAxIDEuNTM4IDEuMDI1IDIuMTM3IDIuMTM3IDAgMCAwIDIuOTEyLjgyNSAyLjEgMi4xIDAgMCAxIC42MzgtMS4zMzhjLTIuMjI1LS4yNS00LjU1LTEuMTEyLTQuNTUtNC45MzdhMy45IDMuOSAwIDAgMSAxLjAyNS0yLjY4OCAzLjYgMy42IDAgMCAxIC4xLTIuNjVzLjgzNy0uMjYyIDIuNzUgMS4wMjVhOS40MyA5LjQzIDAgMCAxIDUgMGMxLjkxMi0xLjMgMi43NS0xLjAyNSAyLjc1LTEuMDI1YTMuNiAzLjYgMCAwIDEgLjEgMi42NSAzLjg3IDMuODcgMCAwIDEgMS4wMjUgMi42ODhjMCAzLjgzNy0yLjMzOCA0LjY4Ny00LjU2MiA0LjkzN2EyLjM3IDIuMzcgMCAwIDEgLjY3NCAxLjg1YzAgMS4zMzgtLjAxMiAyLjQxMy0uMDEyIDIuNzUgMCAuMjYzLjE4Ny41NzUuNjg3LjQ3NUExMC4wMDUgMTAuMDA1IDAgMCAwIDEyIDIuMjQ3Ii8+PC9zdmc+",
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
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email, password: password });
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
