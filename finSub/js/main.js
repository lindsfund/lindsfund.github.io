import { loadHeaderFooter } from "./utils.mjs";
import {returnAPI} from "./externalServices.mjs";

const zip = 22554;
const owAPIkey = `bb3a4338529ff49a475fac98f7e5cc42`;
const geoCode = `/geo/1.0/zip?zip=${zip},US&appid=${owAPIkey}`



loadHeaderFooter();
const location = await returnAPI(geoCode);

const lat = location.lat;
const lon = location.lon;

console.log(lat, lon);
const wthrMain = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${owAPIkey}`;
const weather = await returnAPI(wthrMain);

console.log(weather);