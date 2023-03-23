import { returnJSON } from "./externalServices.mjs";
import { getElement} from "./utils.mjs";


const path = '/finSub/seeds.json'

//get data from JSON file and save as an array of objects
export async function returnSeedsJson() {

    let seedsData = await returnJSON(path);
    return seedsData;
}

export function returnItems(items){
    const response = items.map((item) => 
        { //console.log(item);
        
        return {
            seed_id: item.seedPacket_id,
        };
    });
    return response;
}










