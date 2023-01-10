
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