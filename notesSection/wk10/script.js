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
document.getElementById('wkNumHead').textContent += "Week 10 Notes";

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


//-----------------------------------------NOTES--------------------------------------


const gloArr = [2,4,6];//this is an array defined in the global -execution context-

//log the actual functions so that you can see the differance
console.log(multiplyBy2); 


// log the invoked function including the variable 
// console.log(multiplyBy2(gloVar)); //4
// notesToHtml(multiplyBy2(gloVar), 'global');

//log the higher order function of manipulateArr
notesToHtml(manipulateArr.name, 'global', 'p', 'function ');
notesToHtml(manipulateArr(gloArr, multiplyBy2), 'global', 'p', 'output = ');


// this is a function that will have it's own -excecution context- 
function multiplyBy2(input) {
  notesToHtml(input, 'stkTwo','p','input = ');
  return input * 2;
} //return input * 2 to global

//this function will have it's own -execution context- as well. However, the instruct parameter will run a
// an additional -execution context- making this a higher order function and placing instruct in the third tier 
// of the stack.
function manipulateArr(array, instruct) {
  let output = [];
  notesToHtml(array, 'stkOne', 'p', 'array = ');
  notesToHtml(instruct.name, 'global','p', 'function ');
  notesToHtml(instruct.name, 'stkOne', 'p', 'instruct = function ')
  array.forEach((i) => {
    output.push(instruct(i));
  });
  return output;
}

