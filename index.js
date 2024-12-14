require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { getFlights } = require("./controllers/");
const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(express.json());
app.use(cors());

app.get("/data/flights", getFlights);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
