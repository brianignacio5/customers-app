import mongoose from "mongoose";

export async function connectToDb() {
    const mongoUri = process.env.DB_URI || "mongodb://localhost:17569/customersapp"
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Succesfully connected to DB");
    } catch (error) {
        console.log("Error connecting to DB", error);
    }
}