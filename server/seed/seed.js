const mongoose = require("mongoose");
const data = require("./data");
const Location = require("../models/location");

const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Mongo Database Connected!");
        seedDatabase();
    })
    .catch((err) => {
        console.log("Error Occurred");
        console.log(err);
    });

async function seedDatabase() {
    try {
        await Location.deleteMany({});
        for (let d of data) {
            const point = new Location({
                name: d.name,
                latitude: d.latitude,
                longitude: d.longitude,
                city: d.city,
                state: d.state,
                pincode: d.pincode,
                address: d.address,
                installedCapacityMTA: d.installedCapacityMTA,
                contact: {
                    phone_no: d.contact.phone_no,
                    website: d.contact.website
                }
        })
            await point.save();
        }

        mongoose.connection.close();
        
        console.log("Data Seeded Successfully.");
    } catch (error) {
        console.error('Error seeding card data:', error);
        mongoose.connection.close();
    }
}
