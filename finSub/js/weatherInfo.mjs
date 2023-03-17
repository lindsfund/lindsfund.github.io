import {getWeatherData } from "./apiReturns.mjs";


//get info from aPI return
const weather = await getWeatherData();
        
//pull out only the data needed
const currentTemp = weather.main.temp;
const highTemp = weather.main.temp_max;
const lowTemp = weather.main.temp_min;
const precip = weather.weather[0].main;



export default class WeatherData {
    constructor(){
       
        this.currentTemp = currentTemp;
        this.highTemp = highTemp;
        this.lowTemp = lowTemp;
        this.precip = precip;
        
    }

   init(obj) {
        let tObject = {};
        for ( const [key, value] of Object.entries(obj)) { 
            //is the value a number
            if(typeof value == 'number') {
                // round the value
                const round = this.roundTemp(value);
                //place key and rounded value in object
                tObject[`${key}`] = `${round}`     
            } else { 
                tObject[`${key}`] = `${value}`}
        }
        //needs to be a key value pair object with all needed data
                //console.log(tObject); 
        return tObject;
    }

     //function to convert kelvin to fahrenheit
    roundTemp(degKel) {
        let farh = ((degKel-273.15)*1.8)+32;
        let f = Math.round(farh);
        
        return f;
    }
    
}