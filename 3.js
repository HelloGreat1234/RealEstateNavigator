const axios = require('axios');

// Replace with your actual Mapbox API access token
const accessToken = 'your_access_token';

//https://api.mapbox.com/geocoding/v5/mapbox.places/515%2015th%20St%20NW%2C%20Washington%2C%20DC%2020004.json?types=address&access_token= <UserAccessToken />

// Forward Geocoding: Convert address to coordinates
const forwardGeocode = async (searchText) => {
    const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(searchText)}&access_token=${accessToken}`;
    try {
        const response = await axios.get(url);
        console.log('Forward Geocoding Response:', response.data);
    } catch (error) {
        console.error('Error during forward geocoding:', error);
    }
};

const address = '555 5th Ave New York NY 10017 US';
const add1 = "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA"
const add2 = "Simran Residency Sector-7 Kharghar Navi Mumbai"
const add3 = "118, Rafi Marg, Sansad Marg Area, New Delhi, Delhi 110001" //parliament of india
const add4 = "1 Brookings Dr, St. Louis, MO 63130, USA" //WS

forwardGeocode(address)