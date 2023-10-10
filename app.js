const Express=require('express')
const bodyParser=require('body-parser')
const Cors=require('cors')
const mongoose=require('mongoose')
const productModel = require('./productModel')

var app=Express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://sreelekshmisl1710:Dharithri@cluster0.y83cozw.mongodb.net/productDB?retryWrites=true&w=majority",{useNewUrlParser:true})

app.post("/addp",async(request,response)=>{
    let data=request.body
    const product=await new productModel(data)
    let result=product.save()
    if (result.productId!="") {
        response.json({"status":"success"})
    } else {
        response.json({"status":"error"})
    }
})

app.get("/viewp",async(request,response)=>{
    let data=await productModel.find()
    response.json(data)
})

app.listen(3001,()=>{
    console.log("Server is running")
})