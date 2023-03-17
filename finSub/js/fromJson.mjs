import { returnJSON } from "./externalServices.mjs";


const path = '/finSub/seeds.json'

export async function returnSeedsJson() {

    let seedsData = await returnJSON(path);
    return seedsData;
}

const seedsArr = await returnSeedsJson();
console.log(seedsArr);

//-----------------NEXT DO THIS----------
// go through the seedArr and pull out all the keys to build the class
// foreach key value pair in seedArr[0]...grab the key...store it as key for the const...
// grab the key...store it with the dot path as the place to get the defined const...
// it should be similar to this in the WeatherData definition...

                // const currentTemp = weather.main.temp;
                // const highTemp = weather.main.temp_max;
                // const lowTemp = weather.main.temp_min;
                // const precip = weather.weather[0].main;


export default class Seeds {
    constructor() {
        this.seedPacket_id = seedPacket_id;
        this.brand_id = brand_id;
        this.category_id = category_id;
        this.name = name;
        this.cultivar = cultivar;
    }
}