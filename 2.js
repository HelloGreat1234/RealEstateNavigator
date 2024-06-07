const axios = require('axios');

// Replace with your actual API key
const apiKey = '6661fb22f0e45671630012qfb5879d1';

// Forward Geocoding: Convert address to coordinates
const forwardGeocode = async (address) => {
    const url = `https://geocode.maps.co/search?q=${encodeURIComponent(address)}&api_key=${apiKey}`;
    try {
        const response = await axios.get(url);
        console.log('Forward Geocoding Response:', response.data);
    } catch (error) {
        console.error('Error during forward geocoding:', error);
    }
};

// Reverse Geocoding: Convert coordinates to address
const reverseGeocode = async (latitude, longitude) => {
    const url = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=${apiKey}`;
    try {
        const response = await axios.get(url);
        console.log('Reverse Geocoding Response:', response.data);
    } catch (error) {
        console.error('Error during reverse geocoding:', error);
    }
};

// Example usage
const address = '555 5th Ave New York NY 10017 US';
const add1 = "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA"
const add2 = "Simran Residency Sector-7 Kharghar Navi Mumbai"
const add3 = "118, Rafi Marg, Sansad Marg Area, New Delhi, Delhi 110001" //parliament of india
const add4 = "1 Brookings Dr, St. Louis, MO 63130, USA" //WS
const latitude = 40.712776;
const longitude = -74.005974;

forwardGeocode(add4);
// reverseGeocode(latitude, longitude);
