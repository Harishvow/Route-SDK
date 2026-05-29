const axios = require("axios");

async function RetriveMessgae(){
    const response = await axios.get("http://localhost:5005/api/getApiKey");
    return response.data;

}