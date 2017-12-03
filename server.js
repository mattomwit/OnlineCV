const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);


app.use('/', (req, res, next)=>{
    console.log('Request type: ', req.method, 'Request Url: ', req.originalUrl);
    next();
});

//sets static folder to send build angular app
app.use(express.static(path.join(__dirname,'client/dist')));

//error handling
app.use((error, req,res, next)=>{
    console.log(error);
    res.json({message:error.message});
});



const port = process.env.PORT || 3000;
server.listen(port, ()=>{
    console.log('server listening on port'+port);    
});