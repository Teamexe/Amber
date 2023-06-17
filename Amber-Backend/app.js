const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const routes = require("./Routes/Routes");
const { body } = require('express-validator');

const app = express();

app.use(cors());

app.use(bodyParser.json());

dotenv.config();

mongoose.set("strictQuery", false);

app.use(bodyParser.json());

app.use("/", routes);

mongoose.connect("mongodb+srv://Jils:"+process.env.MONGO_PASSWORD+"@cluster0.daqae5e.mongodb.net/Amber_Users?retryWrites=true&w=majority").then(() => {
    app.listen(3001, () => {
        console.log("Server is now running on port 3001");
    });
}).catch(err => console.log(err))
     