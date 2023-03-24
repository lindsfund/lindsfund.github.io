import { loadHeaderFooter, setLocalStorage } from "./utils.mjs";

loadHeaderFooter();

//add event listener for the submit button on the new seed form
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('seedInput')
    .addEventListener('submit', handleFormSubmit);
});

//function to handle the data in the new seed form
function handleFormSubmit(ev){
    ev.preventDefault();

    let myForm = ev.target;
    let fd = new FormData(myForm);

    //review contents in form
    for(let key of fd.keys()){
        console.log(`${key} : ${fd.get(key)}`);
    }

    //cnvert to JSON
    let json = convertFD2JSON(fd);

    //send the request with data to Local Storage
    let url = setLocalStorage('newSeed', json);
    let h = new Headers();
    h.append('content-type','application/json');

    let req = new Request(url, {
        headers: h,
        body: json,
        method: 'POST',
    });
    console.log(req);

    fetch(req)
    .then((res) => res.json())
    .then((data) => {
        console.log(`Response from server`);
        console.log(data);
    })
    .catch(console.warn);
}

function convertFD2JSON(formData) {
    let obj = {};
    for (let key of formData.keys()) {
      obj[key] = formData.get(key);
    }
    return JSON.stringify(obj);
  }