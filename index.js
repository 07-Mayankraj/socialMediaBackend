require('dotenv').config()
const express = require('express')
const dbconnection = require('./config/db')
const cors = require('cors')
const userRoute = require('./routes/users.route')
const postRoute = require('./routes/posts.route')
const authentication = require('./middlewares/authentication.middleware')
const app = express()

// ! middleware 
app.use(cors())
app.use(express.json())
app.use('/users',userRoute)

app.use(authentication)
app.use('/posts',postRoute)


app.get('/',(req,res)=>res.send('homeroute Of backend'))

app.listen(process.env.port,()=>{
    try {
        dbconnection;
        console.log("sever runnign at port " +  process.env.port);
    } catch (error) {
        console.log({err : error.message})
    }
})