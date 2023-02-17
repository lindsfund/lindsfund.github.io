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
document.getElementById('wkNumHead').textContent += "Week 07 Notes";

// scripts to enter notes into the DOM
function notesToHtml(obj, id, elemType = 'p', note, cls) {
  let insHere = document.getElementById(`${id}`);

  // set paragraph to default element only use elem type if the is no
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
//--------------------------Notes----------------------------------------

//------------Scope 
notesToHtml('SCOPE NOTES','scopeClose', 'h2');
let firstName = 'John';
sayHi(); //should display John because it is called before firstName is defined as pete.

function sayHi() {
    notesToHtml(firstName, 'scopeClose','p', 'Hi, ');
}
firstName = 'Pete';

sayHi(); //should display Pete because Pete is the most recent definition of firstName.

function makeWorker() {
    let fName = 'Peter';

    return function() {
        notesToHtml(fName, 'scopeClose','p','From the anon function in makeWorker(): ');
    }; 
}

let fName ='Johnny';

//create a function 
let work = makeWorker();

//call function just created
work();
 //should display work as Peter because JS will look for a definition inside the makeWorker() 
 //function and skip outside the function if it is found. If there was no let fName inside makeWorker()
 //then it would look for a definition outside the function and it would display Johnny.

 function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
 }

 let counter = makeCounter();
 let counter2 = makeCounter(); // 0 & 1 because counter and counter2 are seperate invocations of makeCounter
 // they are independant of eachother.

 notesToHtml(counter(),'scopeClose','p'); // 0
 notesToHtml(counter(),'scopeClose','p'); // 1

 notesToHtml(counter2(),'scopeClose','p'); // 0
 notesToHtml(counter2(),'scopeClose','p'); // 1

 function Counter() {
    let count = 0;
    this.up = function() {return ++count;};
    this.down = function() {return --count;};
 }

 let Counter3 = new Counter();
//both the up and down are defined in the same scope and so it should work fine.

 notesToHtml(Counter3.up(),'scopeClose','p','','quest'); //1
 notesToHtml(Counter3.up(),'scopeClose','p','','quest'); //2
 notesToHtml(Counter3.down(),'scopeClose','p','','quest'); //1

 //--------- QUESTION: Why does it return 1,2,1 instead of 0,1,0?
 notesToHtml('Why does it return 1, 2, 1 instead of 0, 1, 0?', 'scopeClose', 'h3','QUESTION: ','quest');

 let phrase = 'Hello';

 if(true) {
    let user = 'John';

    function sayHello() {
        notesToHtml(`${phrase}, ${user}`, 'scopeClose', 'p');
    }
 }

 sayHello; //There is no sayHello in the global scope where it is called so there would be an error. (sayHello exists only inside the if() statement)

 function sum (a) {
     return function(b) {
        return a + b; //takes a from outside
    } 
 }

 notesToHtml(sum(1)(2), 'scopeClose','p', `a = 1 b = 2 total = `);


let x = 1;

function func() {
  console.log(x); // there will be an error because x is called before it is defined. 
  // because it is defined inside the func JS will use that definition..but it comes after the call.
  
  
  //let x = 2;
}

func();

let arr = [1,2,3,4,5,6,7];

function inBetween(a,b) {
    return function(x) {
        return x>=a && x<=b;
    };
}

function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}

notesToHtml(arr.filter(inBetween(3,6)), 'scopeClose', 'p','Should read 3,4,5,6: ' );
notesToHtml(arr.filter(inArray([1,2,10])), 'scopeClose', 'p', 'Should read 1,2 but NOT 10: ');

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  function byField(fieldname){
    return (a,b) => a[fieldname] > b[fieldname] ? 1 : -1;
  }
  
  notesToHtml(JSON.stringify(users.sort(byField('name'))), 'scopeClose', 'p');
  notesToHtml(JSON.stringify(users.sort(byField('age'))), 'scopeClose', 'p');

  function makeArmy() {
    let shooters = [];

    let i = 0;

    while(i < 10){
        let shooter = i;
        shooters.push(shooter);
        i++;
    }
    return shooters;
  }

  let army = makeArmy();
notesToHtml(Object.entries(army), 'scopeClose', 'p');

//------Currying
notesToHtml('Currying', 'currying', 'h2');

function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }

  function sum2(a, b) {
    return a + b;
  }

  let curriedSum = curry(sum2);

  notesToHtml(curriedSum(1)(2), 'currying', 'p', 'CurriedSum(1)(2)= ');

  function curryAdv(func) {

    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  
  } //end curryAdv

  function sum3(a,b,c) {
    return a + b + c;
  }

  let curriedAdvSum = curryAdv(sum3);

  notesToHtml('All below should be the same number: (7)', 'currying');
  notesToHtml(curriedAdvSum(1,2,4),'currying');
  notesToHtml(curriedAdvSum(1,2)(4),'currying');
  notesToHtml(curriedAdvSum(1)(2)(4),'currying');

  //-----------CSS Animations

