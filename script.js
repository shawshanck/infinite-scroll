// Unspalash API
const count = 10;
const apiKey = '24Rt3Iv73vLdNBVTlfoxFFYut5FwYseedQ-b3B8MCMs'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();