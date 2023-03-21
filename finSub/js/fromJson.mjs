import { returnJSON } from "./externalServices.mjs";


const path = '/finSub/seeds.json'

export async function returnSeedsJson() {

    let seedsData = await returnJSON(path);
    return seedsData;
}

const seedsArr = await returnSeedsJson();
console.log(seedsArr);


function seeds(data) {
    const seeds = seedsArr.map((seed) => Object.create(seed));
    console.log(seeds);
    
}

let seed = seeds(seedsArr);
console.log(seed);

