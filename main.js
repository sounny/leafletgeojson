
var map = L.map('mydiv').setView([0, 0], 2); // Set the center of the map to 0, 0 and the zoom level to 2

// Add a tile layer for the basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);
