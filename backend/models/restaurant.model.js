const mongoose = require('mongoose')
const { stringify } = require('uuid')

const RestaurantSchema= mongoose.Schema({
    owner:{
        type: MongoGridFSChunkError.Schema.Types.ObjectId,
        ref:'User',
    },
    name: String,
    description: String,
    cuisineType: String,
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
    },
    contractInformation: {},
    openingHours: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
    numRating: Number,
    images: [String],
    registrationDate: {
        type: Date,
        default: Date.now,
    },
    open:Boolean,
    foods: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Food",
        },
    ],
});