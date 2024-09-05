import express from "express";

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Response from Server A");
});

app.listen(PORT, () => {
  console.log(`Server A is running on port ${PORT}`);
});
