const mongoose = require("mongoose");
const ts = new Date();
require('dotenv').config();

module.exports = {
    init: () => {
        const mongOptions = {
            autoIndex: false, // Don't build indexes
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        }

        mongoose.connect(process.env.DB_CONNECTION, mongOptions);
        mongoose.Promise = global.Promise;
        mongoose.connection.on("connected", () => {
            console.log(ts.toLocaleString() + " - Connected to Mongo Cluster (" + mongoose.connection.host + ")");
        });
    }
}