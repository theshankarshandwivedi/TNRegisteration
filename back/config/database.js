const mongoose = require('mongoose');

require("dotenv").config();

exports.dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => 
        console.log("DB connected successfully. You may now proceed")
    )
    .catch((err) => {
        console.log("DB connection error");
        console.error(err);
        process.exit(1);
    });
}