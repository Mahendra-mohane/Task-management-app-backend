import mongoose from 'mongoose';// Importing the 'mongoose' library for MongoDB connection.
import dotenv from 'dotenv';// Importing 'dotenv' for loading environment variables from a '.env' file
dotenv.config();//// Loading environment variables from a '.env' file

// Function to establish a connection with the MongoDB database
const Connection = () => {
    
    const MONGODB_URI = process.env.MONGODB_URI;//Retriev the MongoDB URI from environment variables

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }); // Connecting to the MongoDB using the retrieved URI

    // Event listener for successful connection
    mongoose.connection.on('connected', () => {
        console.log('Database (MongoDB) connected successfully');
    });

    // Event listener for disconnection
    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });

    // Event listener for connection errors
    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database (MongoDB): ', error.message);
    });
};

// Exporting the 'Connection' function for use in other parts of the application
export default Connection;
