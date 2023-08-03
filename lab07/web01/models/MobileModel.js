const mongoose = require('mongoose')

var MobileSchema = mongoose.Schema({
    brandName   : String,
    phoneModel  : String,
    quantity    : Number,
    price       : Number,
    date        : String,
    image       : String,
    bestSeller  : Boolean
})

var MobileModel = mongoose.model("dienthoai", MobileSchema, "mobile")

module.exports = MobileModel