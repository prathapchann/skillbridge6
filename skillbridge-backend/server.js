require("dotenv").config();



const express = require("express");

const cors = require("cors");




const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/users", require("./routes/studentRoutes"));

const PORT = 3000;

app.get('/',()=>{console.log("tested")})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
