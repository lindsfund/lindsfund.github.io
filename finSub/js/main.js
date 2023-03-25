import {loadHeaderFooter, showInDom} from "./utils.mjs";
import {frostDateTemplate, getFrostDate } from "./frostDate.mjs";
import WeatherData from "./weatherInfo.mjs";
import {returnSeedsJson} from "./fromJson.mjs";
import {pickStation } from "./apiReturns.mjs";

loadHeaderFooter();

//get location info
// const station = await pickStation();
//         console.log(station);

//get weather data
const weather = new WeatherData();
weather.renderInDom('#wkWeather');

// get frostDate
const frostDate = await getFrostDate();
showInDom('#frostDt', frostDateTemplate(frostDate));












       























