const router =require('express').Router()
const controller =require('../controllers/controllers')

router.get('/',controller.getInternetSpeed)

module.exports=router;