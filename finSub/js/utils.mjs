

//function to load the header and the footer
export async function loadHeaderFooter() {
    const hdrTemplate = await loadTemplate('partials/header.html');
    const hdrElement = document.querySelector('#mainHeader');
    const ftrTemplate = await loadTemplate('partials/footer.html');
    const ftrElement = document.querySelector('#mainFooter');

    renderObjTemplate(hdrTemplate, hdrElement);
    renderObjTemplate(ftrTemplate, ftrElement)
}

//function to load a template
export async function loadTemplate(path) {
    const response = await fetch(path);
    const template = await response.text();
   
    return template;
}

//function to render *ONE* object and template
export function renderObjTemplate(template, prntElem, data, callback) {
    // check for callback...if yes call and run it
    if(callback) { callback(data);}
    prntElem.insertAdjacentHTML('afterbegin', template);
} 

//get an element from the DOM
export function getElement(selector, parent = document) {
    return parent.querySelector(selector);
}


//get month name
export function getMonthName(number) {
    const date = new Date();
    date.setMonth(number - 1);

    return date.toLocaleString('en-US', { month: 'long' });
}

//render info in the DOM *ONE W/OUT temp*
export function showInDom(selector, data){
    //grab element
    const element = getElement(selector);

    //collect data to show
    const showThis = `${data}`;

    //insert data into DOM
    element.insertAdjacentHTML('afterBegin', showThis);
}

//set local Storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

//function to filer array by category
export function filterByCategory(array, _category){ 
    return array.filter((obj) => obj.category_id == _category);
}

//custom alert function
export function alertMessage(message, scroll=true){
    //create element for alert
    const errAlert = document.createElement('div');

    //add class for styling
    errAlert.classList.add('alert');
    
    //set contents of alert
    errAlert.innerHTML = `<p>${message}</p><span>x</span>`;    

    //add listener to close
    errAlert.addEventListener('click', function(e){
         //if x is clicked...close alert
        if(e.target.tagName === 'SPAN'){
            main.removeChild(this);
        }
    });

    //render alert
    const main = document.querySelector('main');
    main.prepend(errAlert);

    //scroll to top of page for user
    if(scroll) window.scrollTo(0,0);
}

//capitalize the first letter of a string
