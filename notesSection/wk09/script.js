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
document.getElementById('wkNumHead').textContent += "Week 09 Notes";

// scripts to enter notes into the DOM
function notesToHtml(obj, id, elemType = 'p', note, cls) {
  let insHere = document.getElementById(`${id}`);
  let elem = document.createElement(`${elemType}`);
  //set default to none and make it so that class is optional 
  if (typeof(cls) != 'undefined') {
      this.cls = cls;
      elem.className = cls;
  }
  //set note to optional put in before if it is there and leave it out if it's not
  if (typeof(note) != 'undefined') {
    this.note = note;
    elem.innerHTML = note + obj;
  } else {
    elem.innerHTML = obj;
  }
  

  insHere.append(elem);
}

// const test = 'This is a test.'
// notesToHtml(test, 'mainBody', 'h3');
//-----------------------------------------NOTES--------------------------------------

 // provided methods for storage objects   
    // setItem(key, value) - store key/value pair
    // getItem(key) - get value by the key
    // removeItem(key) - remove the key AND the value
    // clear() - delete EVERYTHING
    // key(index) - get the key at a given(index) position
    // length - the number of stored

    //storage objects are not iterable.
    //both key and value must be strings. If they were any other type they would get converted 
        //to a string automatically:



//-----LOCAL STORAGE
// The main features of localStorage are:
//  - Shared between all tabs and windows from the same origin.
//  - The data does not expire. It remains after the browser restart and even OS reboot.
//  - We only have to be on the same origin (domain/port/protocol), the url path can be different.

// function to put localStorage in the DOM
function lsToDom(key){
  let ls = localStorage.getItem(key);
  return ls;
}

// notesToHtml(lsToDom('test'), 'mainBody', 'h3', 'localStorage = ');
// localStorage.setItem('test',1);

//set key
localStorage._test = 2; //doesn't keep the 1 from the previous setItem

//get key
lsToDom('_test');

//remove key
delete localStorage._test; //removes item 'test' AND the info stored there

//looping through keys

// for loop with filter fields from the prototype with hasOwnProperty check
localStorage.test = 1;
localStorage.test2 = 2;

for(let key in localStorage) {
  if(!localStorage.hasOwnProperty(key)) {
      continue; // skip keys like "setItem", "getItem" etc
  }
  notesToHtml(`${key}: ${localStorage.getItem(key)}`, 'lp1','p','loop using hasOwnProperty: ');
}

//Or just get the “own” keys with Object.keys and then loop over them if needed:
let keys = Object.keys(localStorage); //sets all the keys to the variable 'keys'
for(let key of keys) {
  notesToHtml(`${key}: ${localStorage.getItem(key)}`, 'lp2', 'p', 'loop using Object.keys: ');
  //Works because Object.keys only returns the keys that belong to the object, ignoring the prototype.
}

localStorage.user = JSON.stringify({name: 'John'});

let user = JSON.parse(localStorage.user);
notesToHtml(user.name, 'locSto','p', 'User = ');

//-------SESSION STORAGE
  // Properties and methods are the same, but it’s much more limited:

      // - The sessionStorage exists only within the current browser tab.
      // - Another tab with the same page will have a different storage.
      // - But it is shared between iframes in the same tab (assuming they come from the same origin).
      // - The data survives page refresh, but not closing/opening the tab.
      // - sessionStorage is bound not only to the origin, but also to the browser tab.

sessionStorage.setItem('test', 'test');

notesToHtml(sessionStorage.getItem('test'),'sesSto','p','sessionStorage: ');

//-----------STORAGE EVENT
// When the data gets updated in localStorage or sessionStorage, storage event triggers, with properties:
      // key – the key that was changed (null if .clear() is called).
      // oldValue – the old value (null if the key is newly added).
      // newValue – the new value (null if the key is removed).
      // url – the url of the document where the update happened.
      // storageArea – either localStorage or sessionStorage object where the update happened.
      // The important thing is: the event triggers on all window objects where the storage is accessible,
          // EXCEPT the one that caused it.

//Tasks -Create a textarea field that “autosaves” its value on every change.

const textBox = document.querySelector('#testSave');
const clrBtn = document.querySelector('#clrButton');

textBox.addEventListener('keyup', () => {
  localStorage.text = document.querySelector('#testSave').value;
});

textBox.value = localStorage.getItem('text');

clrBtn.addEventListener('click', () => {
  localStorage.text = '';
  document.querySelector('#testSave').value = '';
});

//THOUGHT!----this seems like it would be a resource heavy way to do this...I would rather have a way
            // to take the time between the last keyup and the current time and subtract them to get a gap
            // time. Then if that gap time is longer than a few seconds have the textarea storage value saved
            // to local storage. I didn't have time to figure that out however...maybe another day. <----
            
