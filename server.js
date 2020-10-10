const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
