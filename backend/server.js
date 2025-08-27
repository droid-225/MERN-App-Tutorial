import express from "express";
const app = express();

// Endpoint
// A commbination of a URL + HTTP method that lets the client interact with a specific resource.
// All of these method responses are endpoints
app.get("/api/notes", (req, res) => {
    res.status(200).send("Hello World!");
});

app.post("/app/notes", (req, res) => {
    res.status(201).json({message:"note craeted successfully!"});
});

app.put("/app/notes/:id", (req, res) => {
    res.status(201).json({message:"note updated successfully!"});
});

app.put("/app/notes/:id", (req, res) => {
    res.status(201).json({message:"note deleted successfully!"});
});

app.listen(5001, () => {
    console.log("Server started on port 5001")
});