import { returnSeedsJson } from "./fromJson.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

//get array of seeds from JSON
const seedArr = await returnSeedsJson();
       

//set constants for event listeners 
const toPlant = document.getElementById('toPlant');
const growIt = document.getElementById('growIt');
const springDisplay = document.getElementById('springDisplay');
const fallDisplay = document.getElementById('fallDisplay');


function getPlantInfo(){
   // console.log(toPlant.value);
   // console.log(seedArr);
   let obj = {};
    seedArr.filter(element => {
        if(element.name === toPlant.value && element.frstHardy != null){
            console.log(element);
            element.push(obj);
        } else {
            console.log('no match');
        }
        
        return obj;
    });
}

function isFrostTolerant(){
    let plantName = getPlantInfo();
    console.log(plantName);
   if(frstHardy === 'no'){
    springDisplay.append(plantName); 
    console.log(plantName);
   } else {
    let p = document.createElement('p');
    fallDisplay.append(plantName, p);
    
   }

}


growIt.addEventListener('click', isFrostTolerant);