import { returnSeedsJson } from "./fromJson.mjs";
import { loadHeaderFooter, showInDom,filterByCategory } from "./utils.mjs";

loadHeaderFooter();

function displaySeed(seed){
    return `<div class="seedCardElem">
    <p>${seed.seedPacket_id}</p>
    <p>${seed.brand_id}</p>
    <p>${seed.name}</p>
    <p>${seed.cultivar}</p>
    <!-- plantedbefore? -->
</div>`
}
//get array of seeds from JSON
const seedArr = await returnSeedsJson();
        //console.log(seedArr);

//eventListener for category drop down
let changedText = document.getElementById('changed');

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


