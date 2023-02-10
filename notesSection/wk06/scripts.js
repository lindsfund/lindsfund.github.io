//image gallery template
let imageGalleryTemplate = function imageGalleryTemplate (imgs) {
    let imgTemp = ` <h2>Image gallery</h2>
        <div class="gallery">
          <figure>
            <img src="images/.png" alt="image of notes">
            <figcaption>*******</figcaption>
        </figure>
        <figure>
          <img src="images/.png" alt="image of notes">
          <figcaption>*******</figcaption>
      </figure>
      <figure>
        <img src="images/.png" alt="image of notes">
        <figcaption>*******</figcaption>
    </figure>
        </div>`
        return imgTemp;
}

//insert week number into header
document.getElementById('wkNumHead').textContent += "Week 06 Notes";

// scripts to enter notes into the DOM
function notesToHtml(obj, id, elemType, note, cls) {
  let insHere = document.getElementById(`${id}`);
  let elem = document.createElement(`${elemType}`);
  //set default to none and make it so that class is optional 
  if (typeof(cls) != 'undefined') {
      this.cls = cls;
      elem.className = cls;
  }
  //set note to optional put in before if it it there and leave it out if it's not
  if (typeof(note) != 'undefined') {
    this.note = note;
    elem.innerHTML = note + obj;
  } else {
    elem.innerHTML = obj;
  }
  

  insHere.append(elem);
}

//----------------------------------------------------------Notes
//get the whole form
let form = document.forms.my;

notesToHtml(form,'mainInsert', 'p', '(see console for HTML notes) Get the whole form: ');
console.log(form);

//get the element
let elem = form.elements.one;
console.log(elem);

//elements with the same name
let sameElemName = form.elements.age;
console.log(sameElemName); //this prints a node list
console.log(sameElemName[0]);
console.log(sameElemName[1]);// these return the individual elements

let fieldSet = form.elements.login;
console.log(fieldSet); 

notesToHtml(my.login == form.login, 'mainInsert', 'p', 'my.login == form.login: '); //true

//accessing values
notesToHtml(sameElemName[0].value, 'mainInsert', 'p','Values: '); // .value acces the value instead of the HTML
notesToHtml(sameElemName[1].value, 'mainInsert', 'p','Values: ');
notesToHtml(sameElemName[0].checked, 'mainInsert', 'p','Values: ');//.checked will return true or false depending on weather the radio button or box is filled.

//select and option
select.options[2].selected = true; //options are zero indexed like arrays so the third is 2
select.selectedIndex = 1;
select.value = 'banana' 

//get all that are selected when multiple are allowed
let selected = Array.from(selectMult.options)
                    .filter(option => option.selected)
                    .map(option => option.value);

notesToHtml(selected, "mainInsert", 'p', 'Selected from music options: ', 'mkItGreen');

//add new (unselected)option to the list ** to add a selected property add ' ,true ,true' at the end
let option = new Option('text', 'value',true,true);//creates <option value='value'> TEXT </option>
console.log(option);


//------------------------FORMDATA Objects
//event listener
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('formObject').addEventListener('submit', handleForm);
});

//function to handle info inside the form

function handleForm(ev) {
  ev.preventDefault(); //This wioll stop the page from relaoding *** VERY IMPORTANT***
  console.log(ev.target);

  let myForm = ev.target;
  let fd = new FormData(formObject);

  //add more things that were not in the form
  fd.append('api-key', 'myApiKey');

  //look at all the contents
  for (let key of fd.keys()) {
    console.log(key, fd.get(key));
  }

  //send the request with the formdata
  
} 




