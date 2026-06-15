const mongoose = require("mongoose");

const connectDB = async () => {

    try {

        await mongoose.connect(
            "mongodb+srv://prathap:abcd@bridge.ketqs4o.mongodb.net/?appName=bridge"
        );

        console.log("MongoDB Connected");

    } catch (error) {

        console.log(error);

        process.exit(1);
    }
};

module.exports = connectDB;
