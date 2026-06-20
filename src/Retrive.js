const axios = require("axios");

async function RetriveMessage(Userapikey, message){
    const response = await axios.post("http://localhost:5005/api/getApiKey", {
        Userapikey,
        message
    });
    return response.data;
}

module.exports = { RetriveMessage };