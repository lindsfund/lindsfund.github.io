import { returnJSON } from "./externalServices.mjs";
import { getElement} from "./utils.mjs";


const path = '/finSub/seeds.json'

//get data from JSON file and save as an array of objects
export async function returnSeedsJson() {

    let seedsData = await returnJSON(path);
    return seedsData;
}

export function returnSimplifiedJSON(items){
    const response = items.map((item) => 
        { //console.log(item);
        
        return {
            seedPacket_id: item.seedPacket_id,
            brand_id: item.brand_id,
            category_id: item.category_id,
            name: item.name,
            cultivar: item.cultivar,
        };
    });
    return response;
}










