const express=require("express");
const app=express();
const morgan=require("morgan");
const bodyParser=require("body-parser");
const mongoose=require("./database/mongoose.js");

const productRoute=require("./routes/products");
const registerRoute=require("./routes/register");


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/uploads",express.static("uploads"));

const cors=require("cors")
app.use(cors());

app.use("/products",productRoute);
app.use("/register",registerRoute);


module.exports=app;