import { returnSeedsJson } from "./fromJson.mjs";


//get array of seeds from JSON
const seedArr = await returnSeedsJson();
console.log(seedArr);

//function to filer array by category
function filterByCategory(array, _category){
    return array.filter((obj) => obj.category_id === _category);

}
console.log(filterByCategory(seedArr, 2));

//function to filter by variety
function fileterByVarierty(array, _name){
    return array.filter((obj) => obj.name === _name);
}

console.log(fileterByVarierty(seedArr, 'Lettuce'));

//eventListener for category drop down
let categorySelector = '',
changedText = document.getElementById('changed');

function selectValue(){
    changedText.textContent = this.value;
}

document.getElementById('category').onchange = selectValue;