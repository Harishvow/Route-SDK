const express = require("express")
const {GenerateResponse}=require("../chat")


const router=express.Router()

router.post("/Response",GenerateResponse)

module.exports=router;