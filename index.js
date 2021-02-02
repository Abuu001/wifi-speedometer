const express= require('express')
const app = express()
const http= require('http')
const server = http.createServer(app)
require('dotenv').config({path : "./config/dev.env"})
const cors=require('cors')
const router =require('./routers/routes')


//middleware
app.use(cors())
app.use("/api/speed-test",router)


const PORT =process.env.PORT || 3009;
server.listen(PORT,()=>console.log(`Server running on port ${PORT}`))