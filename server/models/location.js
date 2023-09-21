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
        location: {
            type: {
                type: String,
                enum: ['Point'],
            },
            coordinates: {
                type: [Number],
            }
        },    
        contact: {
            phone_no: String,
            website: String
        }
    },
    { timeStamps: true }
);

LocationSchema.index({ location: '2dsphere' });

LocationSchema.pre('save', async function (next) {
    this.location = {
        type: 'Point',
        coordinates: [this.longitude, this.latitude]
    }
    next();
});



const Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
