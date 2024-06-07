api_key = "6661fb22f0e45671630012qfb5879d1"
address = "Simran Residency Service Road Sector-7 Khaghar Navi Mumbai"
const axios = require('axios')

async function getLatLong(){
    const response = await axios.get(`https://geocode.maps.co/search?q=${encodeURIComponent(address)}&api_key=${api_key}`);
    // const response = await axios.get(`https://geocode.maps.co/search?q=555+5th+Ave+New+York+NY+10017+US&api_key=`);
    console.log(response)
    return response
}


getLatLong()

