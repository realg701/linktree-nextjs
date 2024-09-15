import { jwtDecode } from "jwt-decode";
import { User } from "../models/user.js";

export const loadProfile = async (req, res) => {
  const { tokenMail } = req.body;
  console.log(req.body);

  try {
    const decodedTokenMail = jwtDecode(tokenMail, process.env.SECRET_JWT);
    const email = decodedTokenMail.email;
    const user = await User.findOne({ email: email });
    console.log("decoded user", user);
    const userData = { name: user.name, bio: user.bio, avatar: user.avatar };
    return res.json({ message: "found", userData, status: "success" });
  } catch (error) {
    return res.json({ status: "error", error: error.message });
  }
};

export const loadSocials = async (req, res) => {
  const { tokenMail } = req.body;
  console.log(req.body);

  try {
    const decodedTokenMail = jwtDecode(tokenMail, process.env.SECRET_JWT);
    const email = decodedTokenMail.email;
    const user = await User.findOne({ email: email });
    console.log("decoded user", user);
    const socials = user.socialMedia;
    return res.json({ message: "found", socials, status: "success" });
  } catch (error) {
    return res.json({ status: "error", error: error.message });
  }
};
