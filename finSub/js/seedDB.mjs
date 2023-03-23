
import { returnSimplifiedJSON, returnSeedsJson} from "./fromJson.mjs";

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
    
    this.seedPacket_id = 0;
    this.brand_id = 0;
    this.category_id = 0;
    this.name = '';
    this.cultivar = '';
}
    //inititalize
   async init(){
    //get info from JSON
    const seeds = await returnSeedsJson();
    console.log(seeds);

    //simplify for search
    const seed = returnSimplifiedJSON(seeds);
    console.log(seed);

    // for every seed packet make a new seed object
    seed.forEach(obj => {
        console.log(this);
        console.log(obj);
        
    }); 
    
    
    }

    //filters
    filterByCategory(arr,value) {
        return arr.filter(obj => obj.category_id === value);
    }

    filterByVariety(arr, value) {
        return arr.filter(obj => obj.name === value);
    }


}