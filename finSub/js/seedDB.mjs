import { returnSeedsJson } from "./fromJson.mjs";
import { loadHeaderFooter, showInDom,filterByCategory } from "./utils.mjs";

loadHeaderFooter();

function displaySeed(seed){
    return `<div class="seedCardElem">
    <h3>Seed Type: <br> <span>${seed.name}</span></h3>
    <p>Cultivar: ${seed.cultivar}</p>
    <p>seed Id: ${seed.seedPacket_id}</p>
    <p>Brand Id:${seed.brand_id}</p>
    
    <!-- plantedbefore? -->
</div>`
}
//get array of seeds from JSON
const seedArr = await returnSeedsJson();
        //console.log(seedArr);

//eventListener for category drop down
let changedText = document.getElementById('changed');

//do this when there is a change
function selectCategory(){
    changedText.textContent = this.value;

    //use selected to filter
    const categoryArr = filterByCategory(seedArr, changedText.innerHTML);
            //console.log(categoryArr);

    //are there seeds in this category
    if(categoryArr != ''){
        //display selected category's seeds 
        categoryArr.forEach((obj) => {
            showInDom('.seedCardsContainer', displaySeed(obj));           
        });   
    } else {
        //set display to empty 
        const element = document.querySelector('.seedCardsContainer');
        while (element.hasChildNodes()) {
            element.removeChild(element.firstChild);
        }
    }
}

document.getElementById('category').onchange = selectCategory;


