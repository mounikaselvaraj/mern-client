
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);


import "dotenv/config"; 

import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from "cors";


const app = express();

app.use(cors({
  origin: "https://mern-client-2-a8lh.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

const jwtSecret = process.env.JWT_SECRET || "fallbacksecret";


let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  console.log("Attempting to connect to MongoDB..."); // Add this
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      console.log("Error: MONGO_URI is undefined!"); // Add this
      return;
    }
    await mongoose.connect(uri);
    isConnected = true;
    console.log("MongoDB Connected successfully!");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
};






const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String
});

const User = mongoose.models.User || mongoose.model("User", userSchema);


app.get("/api", (req, res) => {
  res.send("Backend running ");
});

app.post("/api/register", async (req, res) => {
  try {
     await connectDB();
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: "Registered successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message:err.message });
  }
});

app.post("/api/login", async (req, res) => {
  try {
     await connectDB();
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "1d" });

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});


const verifyToken = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(403).json({ message: "No token" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

app.get("/api/dashboard", verifyToken, (req, res) => {
   
  res.json({ message: "Welcome UserId: " + req.userId });
});

const Port = process.env.PORT||  5000;

app.listen(Port, () => {
    console.log("Port is " + Port);
     connectDB();
});
// export default serverless(app);