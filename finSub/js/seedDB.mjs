
import { returnSimplifiedJSON, returnSeedsJson} from "./fromJson.mjs";

//get the info from the JSON
// const seeds = await returnSeedsJson();
//         console.log(seeds);

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
    constructor(_id, _brand,_category,_name,_cultivar){
        this.seedPacket_id = _id;
        this.brand_id = _brand;
        // this.category_id = _category;
        // this.name = _name;
        // this.cultivar = _cultivar;   
    }
    getId(){
       
        return this.idNum;
    }

    setId(_id){
        this.idNum = _id;
    }

    init(array) {
        //loop through the array and pull out the data for the constructor
        array.forEach(element => {
            console.log(element);
            let s = new Seeds(element.seedPacket_id, element.brand_id);
            console.log(s);
            return s;
        });
    }

    showMethod(){
        //function space saver
    }
}





//filters
// filterByCategory(arr,value) {
//     return arr.filter(obj => obj.category_id === value);
// }

// filterByVariety(arr, value) {
//     return arr.filter(obj => obj.name === value);
// }