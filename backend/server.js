const express = require('express');
const { restart } = require('nodemon');
const register = require('./routes/register');
const connectDB = require('./db');
const app = express();
const PORT = 5000;
connectDB();
app.use(express.json());
app.use('/register',register);


app.get('/',(req,res)=>{
    res.send('hello world');

});

app.listen(PORT,() => {
    console.log('Server running at port ',PORT)
})