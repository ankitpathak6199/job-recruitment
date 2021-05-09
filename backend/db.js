const mongoose = require('mongoose');

async function connectDB (){
try{
    mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology',true);

await mongoose.connect('mongodb://localhost:27017/job-recruitment',{useNewUrlParser:true});
console.log('mongodb connected');
}catch(err){
    console.log(err);
    process.exit(1);
}
}
module.exports = connectDB;