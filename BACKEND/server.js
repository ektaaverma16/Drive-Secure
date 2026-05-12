require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const connectDB = require("./config/db");
const { initSocket } = require("./config/socket");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const predictionRoutes = require("./routes/predictionRoutes");
const routeRoutes = require("./routes/routeRoutes");
const alertRoutes = require("./routes/alertRoutes");
const locationRoutes = require("./routes/locationRoutes");

const app = express();
const server = http.createServer(app);

// Initialize Socket.io
initSocket(server);

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/predict", predictionRoutes);
app.use("/api/route", routeRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/location", locationRoutes);

app.get("/", (req,res) =>{
    res.send("DriveSecure API is running");
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, ()=>{
    console.log(`Server is listening on port:${PORT}`);
});