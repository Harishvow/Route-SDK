const axios = require("axios");

async function RetriveMessage(Userapikey, message){
    const response = await axios.get("http://localhost:5005/api/getApiKey", {
        data: { Userapikey, message }
    });
    return response.data;
}

module.exports = { RetriveMessage };