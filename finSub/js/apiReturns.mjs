import { returnAPI } from "./externalServices.mjs";


//---these will need to be dynamic
const zip = 22554; //looking for rain

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


export async function getWeatherData(lat,lon) {
    const weather = await returnAPI(owURL, wthrMain);
    return weather;
}


//-----------get light informtion from weather API???


//get farmSence API info (stations/probabilities)
const findStation = `/stations/?lat=${lat}&lon=${lon}`;

export async function getStationList(lat, lon){
    const stations = await returnAPI(fsURL,findStation);
    return stations;
}


//pick station
export async function pickStation() {
    //get the station list
    const stationsList = await getStationList();

    //pick a station (---could be dynamic)
    const station = stationsList[0].id;
     

    return station;
}

//get probabilities with station from fsAPI

//---will need to be dynamic
const statID = await pickStation();
// console.log(statID);
const seasNum = 1;

const findProb = `/probabilities/?station=${statID}&season=${seasNum}`;

export async function getProbilities(statID,seasNum){
    const probabilities = await returnAPI(fsURL, findProb);
    return probabilities;
}



 
