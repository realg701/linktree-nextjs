import { jwtDecode } from "jwt-decode";
import { User } from "../models/user.js";

export const saveProfile = async (req, res) => {
  const { tokenMail, name, bio, avatar } = req.body;
  console.log(req.body);

  try {
    const decodedTokenMail = jwtDecode(tokenMail, process.env.SECRET_JWT);
    const email = decodedTokenMail.email;
    const user = await User.findOne({ email: email });
    console.log("decoded user", user);
    user.name = name;
    user.bio = bio;
    user.avatar = avatar;
    await user.save();
    return res.json({ message: "saved", status: "success" });
  } catch (error) {
    return res.json({ status: "error", error: error.message });
  }
};

export const saveSocials = async (req, res) => {
  const { tokenMail, socials } = req.body;
  console.log(req.body);

  try {
    const decodedTokenMail = jwtDecode(tokenMail, process.env.SECRET_JWT);
    const email = decodedTokenMail.email;
    const user = await User.findOne({ email: email });
    console.log("decoded user", user);
    user.socialMedia = socials;
    await user.save();
    return res.json({ message: "saved", status: "success" });
  } catch (error) {
    return res.json({ status: "error", error: error.message });
  }
};

export const saveLinks = async (req, res) => {
  const { tokenMail, links } = req.body;
  console.log(req.body);

  try {
    const decodedTokenMail = jwtDecode(tokenMail, process.env.SECRET_JWT);
    const email = decodedTokenMail.email;
    const user = await User.findOne({ email: email });
    console.log("decoded user", user);
    user.links = links;
    await user.save();
    return res.json({ message: "saved", status: "success" });
  } catch (error) {
    return res.json({ status: "error", error: error.message });
  }
};
