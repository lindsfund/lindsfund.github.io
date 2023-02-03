// let promise = fetch(url,[options])
        //url - where to access
        //options - optional paramenters such as methods, headers, etc. 
            // without this it is a simple get request

// see HTTP status:
    //let response = await fetch(url);
    //
    //if (response.ok){
        // let json = await response.json();
    //} else{
        //alert('HTTP-Error: ' + response.status);    
    //}

let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);
// let commits = await response.text(); //read and parse as JSON

fetch(url)
    .then(response => response.json())
    .then(commits => {
        let htmlIns = document.getElementById('fetch1');
        htmlIns.innerHTML += `<br><p>Github fetch request response: ${commits[0].author.login}<p>`;
        
     });

//------------------------------------------------

async function pika() {
    let url2 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
    let response = await fetch(url2);
    let blob = await response.blob();

    //create <img>
    let img = document.createElement('img');
    img.setAttribute('class','pikaImg');
    document.body.append(img);

    //show it
    img.src = URL.createObjectURL(blob);
}
pika();
//----------------------------------------------------

async function headers() {
    let response = await fetch(url);

    //get single header
    let singleH = document.getElementById('sHeader');
    singleH.innerHTML += `<br><p> Single Header: ${response.headers.get('Content-Type')}`;
    
    // for(let [key, value] of response.headers) {
    //     alert(`${key} = ${value}`);
    // }
}
headers();

//-----------------------------------------

function outputToPage(obj){
    const location = document.getElementById('aHeader');
    const para = document.createElement('p');

    para.textContent = `First Name: ${obj.firstName} Last Name: ${obj.lastName}`;
    location.appendChild(para);

}


// get the info from the JSON
async function getJsonInfo() {
    //request json file
    const urlMine = './user.json';
    const request = new Request(urlMine);
    //console.log(request);
    
    //read json file or give error
    const response = await fetch(request);
    if(!response.ok){
        const message = `An error ahs occured: ${response.status}`;
        throw new Error(message);
    }
    //console.log(response);

    //display info in json file
    const info = await response.json();
    //console.log(info.users[0]);
   
    // PARSE JSON -- not in this case
        // const parsedInfo = JSON.parse(info);
        // console.log(parsedInfo.firstName);

    // STRINGIFY JSON
       // const stringInfo = JSON.stringify(info);
       // console.log(stringInfo);
   
       
   
    //loop through array of users - OLD SCHOOL
        //    for(i = 0; i < info.users.length; i++) {
        //     console.log(info.users[i]);
        //    }

    //loop through using forEach - NEW SCHOOL
   info.users.forEach(function (user) {
    outputToPage(user);
   })

   return info;
}


getJsonInfo();


//----------------------------------------------rest

function sum(a, b) {
    return a + b;
}

function sumAll(...args//args is the name of an array
) {
    let sum = 0; //define return value

    for (let arg of args) sum += arg;

    return sum;
}

function showName(firstName, lastName, ...titles){
    let fullName = firstName + " " + lastName
    let titleList = titles.length;

    // rest paramenters '...this' must be at the end
    return fullName + ' ' + titleList;
}

//rewrite this function more dynamically next week
function writeToHtml(obj, loc, elem, note) {
 const location = document.getElementById(`${loc}`);
 const element = document.createElement(`${elem}`);
 const lineBreak = document.createElement('br');
 const notes = `${note}`;

 location.appendChild(lineBreak);
 element.textContent = `${obj}`;
 location.append(`${notes} ${obj}`);
}
writeToHtml('Rest**','restParaAndSyntax', 'p','...')
console.log(sum(1, 2));
writeToHtml(sum(1,3,4,5,6), 'restParaAndSyntax', 'p', 'sum of only the first two = ');
writeToHtml(sumAll(1,4), 'restParaAndSyntax', 'p', 'sumAll with only two parameters = ');
writeToHtml(sumAll(1,4,5,6,7,8,9), 'restParaAndSyntax', 'p', 'sumAll with 7 paramenters = ');
writeToHtml(showName('Lindsey', 'Fund', 'wife', 'mother'),'restParaAndSyntax', 'p', 'variables and rest = ');

//----------------------------------------------spread

writeToHtml('Spread**','restParaAndSyntax', 'p','...');
let arr1 = [1,4,7,9];
let arr2 = [2,5,6,8];
let merged = [0, ...arr1, arr2];
let str = 'Hello';
let jsObj = {a:1, b:2, c:3};
let jsObjCopy = {...jsObj};

writeToHtml(Math.max(...arr1), 'restParaAndSyntax', 'p','Should say 9: ');
writeToHtml(merged, 'restParaAndSyntax', 'p', 'Should read 0,1,4,7,9,2,5,6,8: ');
writeToHtml(Array.from(str), 'restParaAndSyntax', 'p', 'Should read H,e,l,l,o: ');
jsObj.d = '4';
writeToHtml(JSON.stringify(jsObj), 'restParaAndSyntax', 'p','Should NOT be the same as below: ');
writeToHtml(JSON.stringify(jsObjCopy), 'restParaAndSyntax', 'p','Should NOT be the same as above: ');
