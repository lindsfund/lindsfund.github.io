function hello(name) {
    let phrase = `Hello, ${name}!`;
  
    say(phrase);
  }
  
  function say(phrase) {
    alert(`** ${phrase} **`);
  }

//-------------------------------------------
  function pow(x, n) {
    let result = 1;
    
    for (let i = 0; i < n; i++) {
        result *= x;
    }    

    return result;
  } //end pow

  let x = prompt('x?', '');
  let n = prompt('n?', '');

  if (n < 0) {
    alert(`Power ${n} is not supported.`);
  } else {
    alert( pow(x, n) );
  }//end if/else

  //------------------------------------------
  let json = '{"name":"Lindsey", "age": "a lady never tells"}'; // pretend it's from the server
  let json2 = '{"age": "a lady never tells"}';
  let user = JSON.parse(json); //convert to JS object
  

  //user is now an object with properties
try {
    alert(user.name);
    alert(user.age);
} catch (err) {
    throw(err);
} finally {
    alert('goodbye!');
}

try {
    let user2 = JSON.parse(json2);

    if(!user2.name){
        throw new SyntaxError("There is no name.");
    }
    alert(user2.name);
   
} catch (err) {
    if (err instanceof SyntaxError) {
        alert( "JSON Error: " + err.message );
      } else {
        throw err; // rethrow (*)
      }
} finally {
    alert('goodbye!');
}