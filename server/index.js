import express from "express";
import cors from "cors";
import connectToDB from "./db.js";
import "dotenv/config";
import { loginUser, registerUser } from "./controllers/auth.js";
import { dashBoardData } from "./controllers/dashboard.js";

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
app.post("/data/dashboard", dashBoardData);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
