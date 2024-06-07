const axios = require('axios');

// Replace with your actual Mapbox API access token
const accessToken = 'pk.eyJ1IjoiYXJjaGl0MTA4IiwiYSI6ImNseDNtZXl4ZDB2cGgyanF1eDZpNHQxbDkifQ.AZm4BVNOXDisTIL4I8iaFw';

// Forward Geocoding: Convert address to coordinates
const forwardGeocode = async (searchText) => {
    const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(searchText)}&access_token=${accessToken}`;
    try {
        const response = await axios.get(url);
        console.log('Forward Geocoding Response:', response.data);
        console.log("DATA : " ,response.data.features[0])
    } catch (error) {
        console.error('Error during forward geocoding:', error);
    }
};

// Reverse Geocoding: Convert coordinates to address (assuming Mapbox has a reverse geocoding endpoint)
const reverseGeocode = async (latitude, longitude) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${accessToken}`;
    try {
        const response = await axios.get(url);
        console.log('Reverse Geocoding Response:', response.data);
    } catch (error) {
        console.error('Error during reverse geocoding:', error);
    }
};

// Example usage
const address = '555 5th Ave New York NY 10017 US';
const add1 = "1600 Pennsylvania Avenue NW, Washington, DC 20500, United States"
const add2 = "Simran Residency, Plot No 21, Sector-7, Kharghar, Navi Mumbai, Maharashtra, India"
const a3 = "house no. 3115, sector  - 3, ballabgarh, Haryana"
const a4 = "house no. 3461 sector  - 3, ballabgarh, Haryana"
const latitude = 40.712776;
const longitude = -74.005974;

forwardGeocode(a4);
// reverseGeocode(latitude, longitude);
