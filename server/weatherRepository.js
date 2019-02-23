const logger = require('./logger');
const rp = require('request-promise');
const fs = require('fs');
const i70WeatherUrls = {
    arapahoe_basin: 'https://www.arapahoebasin.com/snow-conditions/',
    keystone : 'https://www.keystoneresort.com/the-mountain/mountain-conditions/snow-and-weather-report/',
    breckenridge : 'https://www.breckenridge.com/the-mountain/mountain-conditions/snow-and-weather-report',
    vail : 'https://www.vail.com/the-mountain/mountain-conditions/snow-and-weather-report',
    beaver_creek : 'https://www.vail.com/the-mountain/mountain-conditions/snow-and-weather-report',
};
require('dotenv').config();

const weatherRepository = new (weatherRepository)({

    getPageRawHtml = url =>{
        rp(url)
            .then(function(html){
                //success!
                console.log(html);
            })
            .catch(function(err){
                //handle error
                logger.log(err);
                return null;
            });


// write files to disk
downloadPages = () => {
    for (var key in i70WeatherUrls) {
        if(!i70WeatherUrls.hasOwnProperty(key)) continue;

        var obj = i70WeatherUrls[key];
        for (var prop in obj) {
            if(!obj.hasOwnProperty(prop)) continue;

            // function

            fs.writeFile('../../cache', getPageRawHtml(prop.toString()), function(err){
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            })
        }
    }
};
});

module.exports = weatherRepository;
