

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

//render info in the DOM
export function showInDom(selector, data){
    //grab element
    const element = getElement(selector);

    //collect data to show
    const showThis = `${data}`;

    //insert data into DOM
    element.insertAdjacentHTML('afterBegin', showThis);
}