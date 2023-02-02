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

const newUser = {
    firstName: 'Bob',
    lastName: 'Smith'
};

async function addJsonInfo() {
    const urlMine = './user.json';
    const request = new Request(urlMine, {
        method:'POST',
        body:JSON.stringify(newUser)
    });
    console.log(request.method);
    console.log(newUser);

    let response = await fetch(urlMine);
    console.log(response);

    let result = await response.json();
    console.log(result);

}


addJsonInfo();