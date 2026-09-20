const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());   // lets Express read JSON from req.body
app.use(logger);           // runs on every request
app.use("/students", studentRoutes);

// Unknown route → 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler (must have 4 parameters)
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});