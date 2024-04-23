const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require('./config/mongoose')

const corsOption = {
  origin: "*",
};

app.use(cors(corsOption));
app.use(express.json());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));

app.use("/", require("./routes/index"));

app.listen(port, (error) => {
  if (error) {
    console.log("error in staring server", error);
  }
  console.log(`Server is runiing on ${port}`);
});
