const mongoose = require('mongoose')
const imgSchema = new mongoose.Schema({

    prname:String,
    prcate:String,
    price:Number,
    img:String

});
const Img = mongoose.model("ProductDetail", imgSchema)
module.exports = Img;