import express from "express";

const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  res.send("Response from Server C");
});

app.listen(PORT, () => {
  console.log(`Server C is running on port ${PORT}`);
});
