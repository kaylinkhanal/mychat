const express=require('express')
require('./app-config.json')
const users=require('./regSchema')
const app=express()
const cors=require('cors')
const port=5000
app.use(express.json());
app.use(cors())

// app.get('/',(req,res)=>{
//     res.send('hello');
// })


// app.post('/register',(req,res)=>{
//     res.send('working fine');
// })
app.post('/register',async (req,res)=>{
    res.send('working fine');
    
    let data=new users(req.body);
    console.log(data)
    const result=await data.save()
    
})
app.listen(5000,()=>{
    console.log(`app running on port ${port}`)
})