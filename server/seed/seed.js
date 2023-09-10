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
        await Location.insertMany(data);

        mongoose.connection.close();
        
        console.log("Data Seeded Successfully.");
    } catch (error) {
        console.error('Error seeding card data:', error);
        mongoose.connection.close();
    }
}
