import { loadHeaderFooter, kelToFah } from "./utils.mjs";
import {returnAPI} from "./externalServices.mjs";

loadHeaderFooter();
/*-- get weather from openWeather API --*/
const zip = 22554;
const locElevation = 220;
const owAPIkey = `bb3a4338529ff49a475fac98f7e5cc42`;
const geoCode = `/geo/1.0/zip?zip=${zip},US&appid=${owAPIkey}`
const owURL = `https://api.openweathermap.org`;
const fsURL = `https://api.farmsense.net/v1/frostdates`;



// call the geo api to convert the zip code to a lat/lon (exteralServices)
const location = await returnAPI(owURL,geoCode);

const lat = location.lat;
const lon = location.lon;

console.log('Lat/Lon', lat, lon);

//call weather API using the lat/lon
const wthrMain = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${owAPIkey}`;
const weather = await returnAPI(owURL,wthrMain);

console.log('Main weather for lat/lon', weather.main);

//call farmSence API to calculate the last and first frost dates
const findStation = `/stations/?lat=${lat}&lon=${lon}`;
const stations = await returnAPI(fsURL, findStation);
console.log(stations);

//in the return list of stations...use elevation and location to pick one
function pickStation(stations, locElevation) {
    let array = [];
    
    stations.forEach(element => {
        //grab elevation information from the individual array index
        let statId = element.id;
        let statElev = element.elevation;    
        
        //compare it to locElevation elevation
       let comp = Math.abs(locElevation - statElev);
       
       //push it to the new array
        array.push({statId, comp});
    });

     //choose index with the smallest gap in elevation
     console.log(array);
     let sml = Math.min(...array);

     
    
}
pickStation(stations,locElevation);

//convert temps from Kelvin to Faharenheit
let degKel = weather.main.temp;

const currTemp = await kelToFah(degKel);
console.log('currTemp = ', Math.round(currTemp));

