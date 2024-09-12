import { jwtDecode } from "jwt-decode";
import { User } from "../models/user.js";

export const dashBoardData = async (req, res) => {
  const { tokenMail } = req.body;
  console.log(tokenMail);
  try {
    const decodedTokenMail = jwtDecode(tokenMail, process.env.SECRET_JWT);
    const email = decodedTokenMail.email;
    const user = await User.findOne({ email: email });
    console.log("decoded user", user);
    const userData = {
      name: user.name,
      role: user.role,
      bio: user.bio,
      avatar: user.avatar,
      handle: user.handle,
      links: user.links.length,
    };
    return res.json({
      message: "User loaded",
      userData,
      status: "Okay",
    });
  } catch (error) {
    return res.json({ status: "error", error: error.message });
  }
};
