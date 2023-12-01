const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const connectToMongo = require("./db");
let port = process.env.PORT;
const allowedOrigins = [process.env.FRONTEND_URL];

// this can be used handle cors for specific url
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors());

connectToMongo();

app.get("/", (req, res) => {
  res.status(200).send("Hi from server");
});

app.get("/connect-to-server", (req, res) => {
  res.status(200).send("Connected to server");
});

app.use("/auth", authRoute);
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server listening at port ${port}`));
