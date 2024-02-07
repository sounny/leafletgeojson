function jsAjax(){
    fetch('MegaCities.geojson')
        .then(response => response.json()) // Parse the response as JSON
        .then(data => callback(data)); // Pass the parsed data to the callback function
};

function callback(data){ // Change 'response' to 'data'
    console.log(data); // Log the data to the console
    // Now 'data' contains the parsed GeoJSON data
    // You can use it to add a GeoJSON layer to your map
    L.geoJSON(data).addTo(map);
}

window.onload = jsAjax; // Remove the parentheses to assign the function, not call it