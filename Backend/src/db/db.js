const  mongoose = require('mongoose')

function connectDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('connect mongoDB');
    })
    .catch(err => {
        console.log('connecting err :', err);
        
    })
}

module.exports = connectDB