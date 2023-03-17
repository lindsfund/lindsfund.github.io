import {getProbilities} from "./apiReturns.mjs";

//---this might be good as a class


export async function getFrostDate() {
    const probList = await getProbilities();
    let frostDate = 0;
    
    //choose temperature threshold
    const tempThreshold = 32; //---should be dynamic (give user options 36,32,28,24,20,16)(use localStorage?)

    //use 90% probability find date
    probList.forEach(element => {
        if(element.temperature_threshold == tempThreshold){
            frostDate = element.prob_90;
            return frostDate;
        }
    });

    //return date
    return frostDate;

}