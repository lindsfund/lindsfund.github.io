import { returnAPI } from "./externalServices.mjs";


//these will need to be filled from the HTML form
const locElevation = 220;
const zip = 22554;

// needed constants for API calls
const owAPIkey = `bb3a4338529ff49a475fac98f7e5cc42`;
const owURL = `https://api.openweathermap.org`;
const geoCode = `/geo/1.0/zip?zip=${zip},US&appid=${owAPIkey}`



const fsURL = `https://api.farmsense.net/v1/frostdates`;


//call the geo API to get the lat/lon
export async function getLocation(zip){
    const location = await returnAPI(owURL, geoCode);
    return location;
}


const location = await getLocation(zip);
const lat = location.lat;
const lon = location.lon;

//call weather API using location (lat/lon)
const wthrMain = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${owAPIkey}`;


export async function getWeather(lat,lon) {
    const weather = await returnAPI(owURL, wthrMain);
    return weather;
}

//console.log(await getWeather());

//get all the weather info from the API
const weather = await getWeather();
console.log(weather);

const weatherMain = weather.main;
console.log(weatherMain);

//-----------get light informtion from weather API???


//get farmSence API info (stations/probabilities)
const findStation = `/stations/?lat=${lat}&lon=${lon}`;

export async function getStationList(lat, lon){
    const stations = await returnAPI(fsURL,findStation);
    return stations;
}
//console.log(await getStationList());
const stationsList = await getStationList();
console.log(stationsList);

//get probabilities with station from fsAPI

//will need to be dynamic
const statID = 442009;
const seasNum = 1;

const findProb = `/probabilities/?station=${statID}&season=${seasNum}`;

export async function getProbilities(statID,seasNum){
    const probabilities = await returnAPI(fsURL, findProb);
    return probabilities;
}

const probList = await getProbilities();
console.log(probList);

 
