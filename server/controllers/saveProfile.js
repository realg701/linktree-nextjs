import { jwtDecode } from "jwt-decode";
import { User } from "../models/user.js";

export const saveProfile = async (req, res) => {
  const { tokenMail, socials } = req.body;
  console.log(req.body);

  try {
    const decodedTokenMail = jwtDecode(tokenMail, process.env.SECRET_JWT);
    const email = decodedTokenMail.email;
    const user = await User.findOne({ email: email });
    console.log("decoded user", user);
    user.socialMedia = socials;
    user.save();
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
    user.save();
    return res.json({ message: "saved", status: "success" });
  } catch (error) {
    return res.json({ status: "error", error: error.message });
  }
};
