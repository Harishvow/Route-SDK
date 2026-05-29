const axios = require("axios");

async function RetriveMessage(){
    const response = await axios.get("http://localhost:5005/api/getApiKey");
    return response.data;
   

}
module.exports={
    RetriveMessage
}