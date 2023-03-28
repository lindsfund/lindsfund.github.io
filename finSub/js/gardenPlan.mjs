import { returnSeedsJson } from "./fromJson.mjs";
import { loadHeaderFooter, alertMessage } from "./utils.mjs";

loadHeaderFooter();

//get array of seeds from JSON
const seedArr = await returnSeedsJson();

       

//set constants for event listeners 
const toPlant = document.getElementById('toPlant');
const growIt = document.getElementById('growIt');
const springDisplay = document.getElementById('springDisplay');
const fallDisplay = document.getElementById('fallDisplay');


async function isFrostTolerant(){
    let plantName = await getPlantInfo();
    try{

        if(plantName.frstHardy === 'no'){
            let p = document.createElement('p');
            springDisplay.append(plantName.name, p); 
        } else if(plantName.frstHardy === 'yes') {
            let p = document.createElement('p');
            fallDisplay.append(plantName.name, p);
            
        } else {
            alertMessage('No Frost Data found.')
        }
    } catch (e) {

        if(plantName === undefined){
            alertMessage('no plant found in database');
        }
        
    }
    

}

function getPlantInfo(){   
    const obj = seedArr.find(element => element.name === toPlant.value);
       return obj;
}

growIt.addEventListener('click', isFrostTolerant);