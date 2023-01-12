import { changeColor } from "./changeColor";

//-----------------------------class
class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }

function showUser() {
    let user = new User("John");
    user.sayHi();
}

class Month {
    constructor(month) {this.month = month;}

    getMonth(){alert(this.month);}
}

function showMonth(){
    let month = new Month("JAN");
    month.getMonth();
}

class Day {
    constructor(day) {this.day = day;}
    get day(){return this._day;}
    set day(value){ this._day = value;}
    getDay(){
        alert(this.day);}
}


function showDay(){
    let day = new Day("Monday");
    day.getDay();
}

class Button {
    constructor(value) {this.value=value;}
    click = () => {alert(this.value);}
}

function showClick(){
    let button = new Button("I clicked it!");
    setTimeout(button.click,1000);
}
//------------------------------------------------------------------------ this
function talk(){return alert('I am ' + this.name);}

const me = {
    name: 'Lindsey',
    talk: talk
}

const you = {
    name: 'NOT Lindsey',
    talk: talk
}

const meTalk = talk.bind(me);


function swapTalk(grab) {
    if (grab === 'call') {alert ('I am ' + this.name + ' only called.');}
    else if (grab === 'bind') {alert ('I am ' + this.name + ' only binded.... not really though. ;) ');}
}
//------------------------------------------------------------------------Import/Export

import {changeColor} from './changeColor.js'
changeColor();

