require('dotenv').config()
const express =  require('express'),
app           =  express(),
PORT          =   process.env.PORT || 3000,
expressLayoutes = require('express-ejs-layouts'),
path            = require('path'),
mongoose        = require('mongoose');

// mongodb connection
mongoose.connect(process.env.MODELMONGO,{useCreateIndex:true, useFindAndModify:true, useUnifiedTopology: true , useNewUrlParser:true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Mongo db is connnected')
});
//set all engin or varible 

app.set('views', path.join(__dirname,'./resource/views'));
app.set('layout','layouts/layout');

app.use(expressLayoutes)
app.set('view engine', 'ejs');
app.use(express.static('public'));
//express able read json or object flile 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// all controller is here ..?
require('./routes/web')(app);


app.listen(PORT, ()=>{
    console.log('server start '+ `${PORT}`);
})