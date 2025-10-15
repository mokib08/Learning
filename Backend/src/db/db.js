const mongoose = require('mongoose');

function connectDB(){
     mongoose.connect(process.env.MONGODB_URL)
     .then(() =>{
        console.log('MongoDB connected');
        
     })
     .catch(err => {
        console.log('MongoDB err : ', err);
        
     })
}




module.exports = connectDB




