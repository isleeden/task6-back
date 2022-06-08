require("dotenv").config();
const express = require("express");
const router = require("./router");
const cors = require("cors");

const PORT = process.env.PORT || 3030;

const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
    preflightContinue: true,
  })
);
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log("server started on port: " + PORT);
});
