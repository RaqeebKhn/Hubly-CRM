const express = require("express");
const app = express();
const env = require("dotenv");
const port = process.env.port || 8000;

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "hello from server"
    })
});

app.listen(port, ()=>{
    console.log('server is running')
});