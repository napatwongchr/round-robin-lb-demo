// Import "express" package to create Node.js server
import express from "express";

const app = express();
const PORT = 3002;

// Create the simple `GET` API
app.get("/", (req, res) => {
  res.send("Response from Server B");
});

// Listen to the request at PORT 3002
app.listen(PORT, () => {
  // When the server start log `Server B is running ...` message
  console.log(`Server B is running on port ${PORT}`);
});
