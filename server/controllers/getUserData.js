import { User } from "../models/user.js";

export const getUserData = async (req, res) => {
  const handle = req.params.handle;
  try {
    const user = await User.findOne({ handle: handle });
    console.log(user);
    const userData = {
      name: user.name,
      bio: user.bio,
      avatar: user.avatar,
      links: user.links,
    };
    return res.json({
      message: "found",
      userData,
      status: "success",
    });
  } catch (error) {
    console.log(error);
    return res.json({ status: "error", error: error.message });
  }
};
