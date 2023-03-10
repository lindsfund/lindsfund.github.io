

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