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

let urlMine = './user.json';
async function tryFetch(){
    let response = await fetch(urlMine);
    console.log(response);
    let data = await response.json();
    console.log(data);

  let key = response.headers.entries();
  console.log(key);

}
tryFetch();
