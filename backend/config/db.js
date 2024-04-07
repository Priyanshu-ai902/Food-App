const  mongoose = require("mongoose")

const mongodbUrl="mongodb+srv://jha75059:JkI0Prf9x5zLimgV@cluster0.acffwr0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB(){
    return mongoose.connect(mongodbUrl)
}


module.exports = connectDB;




// jha75059 JkI0Prf9x5zLimgV
// mongodb+srv://jha75059:JkI0Prf9x5zLimgV@cluster0.acffwr0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0