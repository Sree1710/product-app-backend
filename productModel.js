const mongoose=require('mongoose')
const productModel=mongoose.model("products",mongoose.Schema(
    {
        productId:{type:String,required:true},
        productName:String,
        manufacturer:String,
        productImage:String,
        price:String,
        review:String,
        stock:String
    }
))
module.exports=productModel