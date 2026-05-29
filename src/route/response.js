const express = require("express")
const {GenerateResponse}=require("../chat")


const router=Express.Router()

router.post("/Response",GenerateResponse)