const mongoose = require('mongoose');


function connectDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('connect MongoDB');
        
    })
    .catch( err =>{
        console.log(err);
        
    } )
}

module.exports = connectDB