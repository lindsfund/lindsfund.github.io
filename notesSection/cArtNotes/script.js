// set the local storage key
const key = 'so-cart';

// grab everything in localstorage using the key
const list = getLocalStorage(key);
console.log(list);

//figure out how to pull out these things and store them sperately (save server requests)
            // console.log(list[0].Id);
            // console.log(list[0].Name);
            // console.log(list[0].FinalPrice);
            // console.log(list.length);

// for (let i=0;i<list.length;i++){
//     console.log(list[i].Id);
// } ---same as below

// list.forEach(function(item){
//     console.log(item);
// }) -- same as below

list.forEach(item => console.log(item.Id)); //same as above(simplified arrow function)

//map local storage and pull out id, name, price , number of items in cart (.length)
function groupItems(items) {
    const simplifyItem = items.map((item) => {
        return {
            id: item.Id,
            price: item.FinalPrice,
            name: item.Name
          };})
    return simplifyItem;
}

groupItems(list);