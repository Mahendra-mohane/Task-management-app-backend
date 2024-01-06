
import express from 'express';// Importing the 'express' library for building the web server
import cors from 'cors';// Importing 'cors' for enabling Cross-Origin Resource Sharing
import bodyParser from 'body-parser';//Importing 'body-parser' for parsing incoming request bodies
import Connection from './database/db.js';// Importing the database connection module
import Routes from './routes/route.js';// Importing the application routes


const app = express();// Creating an instance of the Express application
app.use(cors());// Enabling CORS middleware to handle cross-origin requests
app.use(bodyParser.json({ extended: true }));// Configuring middleware to parse incoming JSON data
app.use(bodyParser.urlencoded({ extended: true }));// Configuring middleware to parse incoming form data.



app.use('/', Routes);// Using the defined routes for the application

const PORT = 8000;
Connection();// Establishing a connection to the database
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
