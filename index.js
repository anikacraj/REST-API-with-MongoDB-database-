require('dotenv').config();
const app =require('./app');
const port =process.env.port||2001;

app.listen(port,(req,res)=>{
    console.log(`server is running at http://localhost:${port}`);
})