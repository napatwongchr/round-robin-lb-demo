import express from "express";

const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Response from Server B");
});

app.listen(PORT, () => {
  console.log(`Server B is running on port ${PORT}`);
});
