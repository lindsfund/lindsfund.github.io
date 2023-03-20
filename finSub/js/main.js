import { loadHeaderFooter } from "./utils.mjs";
import {getFrostDate } from "./frostDate.mjs";
import WeatherData from "./weatherInfo.mjs";
import Seeds from "./fromJson.mjs";
import {pickStation } from "./apiReturns.mjs";

loadHeaderFooter();


//get location info
// const station = await pickStation();
//         console.log(station);



// get frostDate
const frostDate = await getFrostDate();
        console.log(`80% chance of frost on ${frostDate}`);

//get weather data
const weather = new WeatherData();
const displayWeather = weather.renderInDom('#wkWeather');



//get seed info
const seeds = new Seeds();


















