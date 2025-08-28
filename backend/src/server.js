import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv"; 

dotenv.config(); // lets us use the values in the .env file

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

//