const {RetriveMessage}=require("./Retrive")
const { GoogleGenerativeAI }=require("@google/generative-ai");
exports.GenerateResponse=async(req,res)=>{
    const info =await RetriveMessage();
    const Apikey =info.apikkey 
    const message=info.Message 

    const genAI=new GoogleGenerativeAI(Apikey)
    const model=genAI.GoogleGenerativeAI(
        {
            model:"gemini-2.0-flash",
        }
    )
    const answer=await model.generateContent(message)
    const Response=answer.response.text()
    res.json({Response})


    



}