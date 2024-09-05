// Import "express" package to create Node.js server
import express from "express";

const app = express();
const PORT = 3001;

// Create the simple `GET` API
app.get("/", (req, res) => {
  res.send("Response from Server A");
});

// Listen to the request at PORT 3001
app.listen(PORT, () => {
  // When the server start log `Server A is running ...` message
  console.log(`Server A is running on port ${PORT}`);
});
