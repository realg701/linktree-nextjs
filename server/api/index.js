import express from "express";
import cors from "cors";
import connectToDB from "../db.js";
import "dotenv/config";
import { loginUser, registerUser } from "../controllers/auth.js";
import { dashBoardData } from "../controllers/dashboard.js";
import { getUserData } from "../controllers/getUserData.js";
import {
  saveLinks,
  saveProfile,
  saveSocials,
} from "../controllers/saveProfile.js";
import { loadSocials } from "../controllers/loadProfile.js";

const app = express();
connectToDB();

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello ");
});

// Routes
app.post("/api/register", registerUser);
app.post("/api/login", loginUser);
// user data
app.post("/data/dashboard", dashBoardData);
app.get("/get/:handle", getUserData);
// save apis
app.post("/save/profile", saveProfile);
app.post("/save/socials", saveSocials);
app.post("/save/links", saveLinks);
// load apis
app.post("/load/socials", loadSocials);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
