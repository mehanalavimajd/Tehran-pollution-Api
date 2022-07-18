const express = require('express');
const app = express();
const axios = require('axios').default;
const process = require('process')
const GetData=()=>{
    var Daily,Now=0;
    return axios.get("http://airnow.tehran.ir/")
    // get the data that is beetween span id="ContentPlaceHolder1_lblAqi24h" and put it in Daily
    // get the data that is beetween span id="ContentPlaceHolder1_lblAqiNow" and put it in Now
    .then(response=>{
        Daily=response.data.split('<span id="ContentPlaceHolder1_lblAqi24h" class=\"info-box-number aqival\">')[1].split('</span>')[0];
        Now=response.data.split('<span id="ContentPlaceHolder1_lblAqi3h" class=\"info-box-number aqival\">')[1].split('</span>')[0];
        return {Daily,Now};
    })
}
app.get("/",(req,res)=>{
    GetData().then(data=>{
        res.send(data);
    })
})
let Port = process.env.PORT ||  8000
app.listen(Port,()=>{
    console.log("Server is running on port "+ Port)
})