import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv"; 
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config(); // lets us use the values in the .env file

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json()); // parses the JSON bodies, allows access to req.body
app.use(rateLimiter);

// example custom middleware:
// app.use((req, res, next) => {
//     console.log(`Request Method: ${req.method}\nRequest URL: ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => { // only starts listening to the port after the db is connected
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
});