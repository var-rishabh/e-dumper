const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema(
    {
        name: String,
        latitude: Number,
        longitude: Number,
        city: String,
        state: String,
        pincode: Number,
        address: String,
        installedCapacityMTA: Number,
        contact: {
            phone_no: String,
            website: String
        }
    },
    { timeStamps: true }
);

const Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
