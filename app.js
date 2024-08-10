const express =require ('express');
const app =express();
const router =require('./Routers/home.routers')

app.use(router);
app.get("/",(req,res)=>{
    res.send("hello");
})
module.exports =app;