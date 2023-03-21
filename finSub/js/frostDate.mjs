import {getProbilities} from "./apiReturns.mjs";
import { getMonthName } from "./utils.mjs";

export function frostDateTemplate(frostDate) {
    return `<div class="qtrSecElem">
    <h2>Frost Info</h2>
    <p>80% chance</p> 
    <p>of frost on</p> 
    <p>${frostDate}</p>
</div>`
}


export async function getFrostDate() {
    const probList = await getProbilities();
    let frostDateStr = 0;
    
    //choose temperature threshold (dynamic? opt: 36,32,28,24,20,16)
    const tempThreshold = 32; 

    //use 80% probability find date
    probList.forEach(element => {
        if(element.temperature_threshold == tempThreshold){
            frostDateStr = element.prob_80;
        
            return frostDateStr;
        }
    });

    //return string as two numbers
    const splitAt = (index, str) => [str.slice(0,index), str.slice(index)];

    const frostDateObj = splitAt(2, frostDateStr);
            // console.log(frostDateObj);
            // console.log(typeof frostDateObj);

    const frostDate = getMonthName(frostDateObj[0]) + ' ' + parseInt(frostDateObj[1]);

    return frostDate;

}

