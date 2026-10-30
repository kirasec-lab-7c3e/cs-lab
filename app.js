const express=require('express');
const app=express();
app.get('/x',(req,res)=>{ res.send('ok'); });
module.exports=app;
