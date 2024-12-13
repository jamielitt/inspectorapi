const https = require('https')

// Function to get status code for given url
function getStatusCode(url)
{
    return new Promise( () => {
        console.log('Making https request to ' + url);
        
        // Get the url and log the status code
        https.get(url, (result) => {
            var message = "Status code for " + url + " is " + result.statusCode;
            console.log(message);
        });
    });
}

// Export function that retieves the url //
module.exports.getUrl = function(value)
{
    // Get url and log output to console
    getStatusCode(value)
        .then(data => {
            console.log(data.length);
        });
};