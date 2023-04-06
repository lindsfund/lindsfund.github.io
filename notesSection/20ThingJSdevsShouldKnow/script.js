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
document.getElementById('wkNumHead').textContent += "Video 7 Notes";

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

const test = 'This is a test. It is in the mainBody set at h3'
notesToHtml(test, 'mainBody', 'h3');
//-----------------------------------------NOTES--------------------------------------

// --------------------------------------------------- ananymous function to arrow function

const sayHello = function() {
  return 'hello, I am an ananymous function'
}

notesToHtml(sayHello(), 'anonFunc', 'p')

const sayHelloArrow = () => {
  return 'hello, I am an anonymous ARROW function'
}

notesToHtml(sayHelloArrow(),'anonFunc', 'p')

//can take paramenters

//if there is only one paramenter and the function only returns then you can eliminate the 
//parenthesies, curly braces and the return command.
const sayHelloPara = para => `hello, I am an anonymous ARROW function with the ${para} parameter`


notesToHtml(sayHelloPara('sup!'),'anonFunc')

//arguments are NOT DEFINED in the default setting for arrow functions. 
const showArgs = function() {
  console.log(arguments);
}



showArgs('object1' , `object2`, `object3`)
notesToHtml(showArgs, 'anonFunc','p','check out the console log: ')

const showArgsArr = () => console.log(arguments);

// showArgsArr('object1' , `object2`, `object3`) //gives error that arguments is not defined


//------------------------------------------------- callback functions
setTimeout(function(){
  console.log('Hello seTimeout callback');
}, 2000)

setTimeout(() => {console.log('Hello setTimeout ARROW function')},3000)


//---------------------------------------------------- Named Functions
function namedFunc(){
  return 'I am a named function'
}

notesToHtml(namedFunc(),'namedFunc')

// arrow functions are ALWAYS anonymous!!!!(constructor functions cannot be arrow functions)
notesToHtml(namedFunc,'namedFunc','p','...as such I cannot be an ARROW function. ')

//-------------------------------------------------- Object Method functions

const me = {
  talk:function(){
    return 'Hello, I am an Object Method Function'
  }
}

notesToHtml(me.talk(), 'objMethodFunc')

const you = {
  talk: () =>  `Hello, I am an Object Method ARROW Function BUT!!!! Don't use me here.`

}

notesToHtml(you.talk(),'objMethodFunc')

//------------------------------------------------ WHY arrow functions
const me1 = {
  name: 'Lindsey',
  talk(){return this},
  arrowTalk: () => {return this},
  timeoutArrowTalk(){
    setTimeout(() => {
      console.log(this.name);
    },1000)
  }
}

console.log(me1.talk());
console.log(me1.arrowTalk()); //will return global(window) scope
me1.timeoutArrowTalk(); //no console.log needed because it's in the function...it won't work if you return this.name

// DO NOT use arrow functions for....
    //prototypes
    //constructor functions
    //Object Methods
    //event handlers
function Person(n) {
  this.name = n
}

Person.prototype.talk = function() {
  return this;
}

Person.prototype.arrowTalk = () => {return this}

const me3 = new Person('Linds')
console.log(me3.talk());
console.log(me3.arrowTalk());
