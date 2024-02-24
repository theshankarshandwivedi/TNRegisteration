const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use(express.json());

require("./config/database").dbConnect();

//route import and mount

const user = require("./routes/DataRoutes");
app.use("/api/v1", user);

//activating the server

app.listen(PORT, (req,res) => {
    console.log(  `Server started at port no ${PORT}`);
    return (`<h1>Hello Jee</>`);
})