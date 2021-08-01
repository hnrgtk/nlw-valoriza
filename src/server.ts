import express from "express";

const app = express();

app.get("/test", (req, res) => res.send("Olá Henry"));

app.post("/test-post", (req, res) => res.send("Olá Post"));

app.listen(3000, () => {
  console.log("Server is running...");
});
