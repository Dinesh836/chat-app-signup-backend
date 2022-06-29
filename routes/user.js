const express = require('express')
const usercontroller=require('../controllers/users')

const router=express.Router()

router.post(`/signup`,usercontroller.signup)

router.post('/login',usercontroller.login )

router.post('/postmsg', usercontroller.postmsg)


module.exports=router

