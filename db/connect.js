const mongoose = require("mongoose");
const connectDB = (url) => {
    // console.log("Connect Database");
    return mongoose.connect(url, {   // If you don't use useNewUrlParser: true option, Mongoose will still be able to connect to the database using the old parser, but you might see a deprecation warning in the console.

        // It's recommended to use useNewUrlParser: true option as it ensures that Mongoose uses the latest and greatest MongoDB driver features and avoids any deprecation warnings that may occur in future updates.

        useNewUrlParse : true,
        useUnifiedTopology : true, 
    },
    console.log("Successfully connected to server"),
    );
}

module.exports = connectDB;