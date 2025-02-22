import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config(); // Load environment variables at the start

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI; // Ensure this is correctly set in your .env file

// Connect to MongoDB
mongoose.connect('mongodb+srv://bahugunasiddhi:bahugunasiddhi@sid.fguws.mongodb.net/bookshelf')
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
