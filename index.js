const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

// Check env variable
console.log("Mongo URL:", process.env.MONGO_URL);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View Engine Setup
app.set("view engine", "ejs");
app.set("views", "./views");

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected to devops DB"))
    .catch((err) => console.log("MongoDB error:", err));

// Schema + Model
const memberSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Member = mongoose.model("Member", memberSchema, "members");

// Routes

// Show Form
app.get("/", (req, res) => {
    res.render("index");
});

// Insert Member
app.post("/add", async (req, res) => {
    try {
        console.log("REQ BODY:", req.body);

        const { name, age } = req.body;

        const newMember = new Member({ name, age });
        await newMember.save();

        res.send("Member added successfully!");
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ error: "Failed to add member" });
    }
});

// Start Server
app.listen(8000, () => {
    console.log("Server started at port 8000");
});
