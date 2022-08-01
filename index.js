
const express = require('express');
  
const app = express();
const PORT = 3000;
  
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

  
app.listen(PORT, (error) =>{
    console.log('api server running on 3000');
});