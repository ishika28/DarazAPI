const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const productSchema=new Schema({
    product_name:{
        type:String
    },
    product_price:{
        type:String
    },
    product_rating:{
        type:String
    },
    product_image:{
        type:String
    }
});

const Product=mongoose.model("Product",productSchema);
module.exports=Product;