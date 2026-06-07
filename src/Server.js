const express = require("express");
const response = require("./route/response")


const app = express();
app.use(express.json());
app.use("/apiresponse", response);

app.listen(5004, () => {
    console.log("Server is running on port 5004");

})


