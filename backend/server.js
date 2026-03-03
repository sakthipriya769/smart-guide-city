require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ FIXED ROUTE
app.use("/api/places", require("./routes/placeRoutes"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/travelPlannerRoutes"));

app.get("/", (req, res) => {
  res.send("Smart Guide City Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});