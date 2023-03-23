
import { returnItems, returnSeedsJson } from "./fromJson.mjs";

//get the info from the JSON
const seeds = await returnSeedsJson();
        //console.log(seeds);

// const seed1 = returnItems(seeds);
// console.log(seed1);

//build the template for the DOM
function seedDisplayTemplate(data) {
    console.log(data);
    return `<div class="seedCardElem">
    <p>${data.seedPacket_id}</p>
    <p>${data.brand_id}</p>
    <p>${data.name}</p>
    <p>${data.cultivar}</p>
    <!-- plantedbefore? -->
</div>`
}

//Build the Class
export default class Seeds {
    //constuctor
constructor() {
    this.seed = {};
}
    //inititalize
   async init(){
    console.log(this);
    const seeds = await returnSeedsJson();
    console.log(seeds);
    const seed = Object.create(seeds);
    console.log(seed);
   
    }

    //filters
    filterByCategory(arr,value) {
        return arr.filter(obj => obj.category_id === value);
    }

    filterByVariety(arr, value) {
        return arr.filter(obj => obj.name === value);
    }


}