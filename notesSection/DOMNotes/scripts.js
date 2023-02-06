function writeToHtml(obj, id, elemType){
    let insHere = document.getElementById(`${id}`);
    let elem = document.createElement(`${elemType}`);
    elem.innerHTML = obj;

    insHere.append(elem);
}

writeToHtml('sup!', 'mainInsert', 'h1');
writeToHtml('sup! only smaller', 'mainInsert', 'p');

// BUT------------can I use this to call another function?
function sum(a, b){
    return a * b;
}

writeToHtml(sum(2,3), 'mainInsert', 'p')

//What if I want to add notes before ie.... 2x3 = sum(2,3)
function writeToHtmlNotes(obj, id, elemType, note){
    let insHere = document.getElementById(`${id}`);
    let elem = document.createElement(`${elemType}`);
    elem.innerHTML = note + obj;

    insHere.append(elem);
}
writeToHtmlNotes(sum(2, 4), 'mainInsert', 'h3','2 x 4 = ')

// add a class for style
function writeToHtmlClass(obj, id, elemType, note, cls){
    let insHere = document.getElementById(`${id}`);
    let elem = document.createElement(`${elemType}`);
    elem.className = cls;
    elem.innerHTML = note + obj;

    insHere.append(elem);
}
writeToHtmlClass(sum(2, 4), 'mainInsert', 'h3','2 x 4 = ', 'maybe');

//what if I only want a class sometimes but don't want a whole new function
function writeToHtmlClassIsh(obj, id, elemType, note, cls){
    let insHere = document.getElementById(`${id}`);
    let elem = document.createElement(`${elemType}`);
    if (typeof(cls) != 'undefined') {
        this.cls = cls;
        elem.className = cls;
    }
    
    elem.innerHTML = note + obj;

    insHere.append(elem);
}
writeToHtmlClassIsh(sum(2, 4), 'mainInsert', 'h3','NO CLASS - 2 x 4 = ');
writeToHtmlClassIsh(sum(2, 4), 'mainInsert', 'h3','2 x 4 = ', 'maybe');


//what if I want to put HTML in the html. XD
mainInsert.insertAdjacentHTML('beforebegin', '<p>This has HTML code in it.</p>');
mainInsert.insertAdjacentHTML('afterend', '<p>This has HTML code in it and it should be at the end.</p>');


//can I do it with variables?
function writeHtmlToHtml (insHere, befAft, message) {
        let insertHere = insHere;

        insertHere.insertAdjacentHTML(`${befAft}`, `${message}`);

}

writeHtmlToHtml(mainInsert, 'afterend', '<p>This has HTML code in it and it should be at the VERY end.Huh? Why does this go above the other one?</p>')