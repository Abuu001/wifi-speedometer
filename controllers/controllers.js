const FastSpeedtest = require("fast-speedtest-api");
require('dotenv').config({path:'../controllers/controllers'})

exports.getInternetSpeed=async(req,res)=>{
    try {         
        let speedTest=new FastSpeedtest({
            token: process.env.TOKEN,
            verbose: false, 
            timeout: 10000,  
            https: true,  
            urlCount: 5,  
            bufferSize: 8,  
            unit: FastSpeedtest.UNITS.Mbps 
        });

        speedTest.getSpeed().then(speed => {
            res.status(200).json({speed : speed})
        }).catch(e => {
            res.status(400).json({message : e.message})
        });

    } catch (error) {
        res.status(400).json({message :  error.message})
    }
}