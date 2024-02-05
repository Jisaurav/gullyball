const express = require('express');
const router = express.Router();
const app = express();
const port = 5000;



app.listen (port,()=>{
    console.log(`Server is listening at ${port}port`);
})

router.get('/home',(req,res)=>{
    res.json({message:" Welcome to Gullyball software"})
})

app.use('/',router)

