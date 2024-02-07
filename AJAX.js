function jsAjax(){ //This function uses the Fetch API to request the 'MegaCities.geojson' file.
    fetch('MegaCities.geojson') //This line fetches the 'MegaCities.geojson' file.
        .then(callback) //This line calls the callback function.
};

function callback(response){ //This function logs the response to the console.
    console.log(response) //This line logs the response to the console.
}

window.onload = jsAjax(); // This line sets the jsAjax function to run when the window finishes loading.