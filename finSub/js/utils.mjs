import { headerTemplate, footerTemplate } from "./templates.mjs";

//function to load the header and the footer
export async function loadHeaderFooter() {
    const hdrTemplate = await loadTemplate(headerTemplate);
    const hdrElement = document.querySelector('#mainHeader');
    const ftrTemplate = await loadTemplate(footerTemplate);
    const ftrElement = document.querySelector('mainFooter');

    renderObjTemplate(hdrTemplate, hdrElement);
    renderObjTemplate(ftrTemplate, ftrElement)
}

//function to load a template
export async function loadTemplate(tempTxt) {
    const response = await fetch(tempTxt);
    console.log(tempTxt);
    const template = await response.text();

    return template;
}

//function to render *ONE* object and template
export function renderObjTemplate(template, prntElem, callback) {
    // check for callback...if yes call and run it
    if(callback) { callback(data);}
    //console.log(template);
    //console.log(prntElem);
} 