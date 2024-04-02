//#region Requires
const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//#endregion

//#region Mongoose
mongoose.connect('mongodb+srv://pmostafamahmoud:rlwL9Ayh08CK0FYZ@cluster0.ramcjtm.mongodb.net/testDB')
mongoose.connection.once("open",()=>{console.log("Connected Sucessfully")})
//#endregion

//#region MW
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//#endregion


//#region Users
    const RegisterRoutes = require('./Routes/users');
    app.use("/api",RegisterRoutes);
//#endregion


app.listen(PORT, ()=>{console.log("http://localhost:"+PORT)});