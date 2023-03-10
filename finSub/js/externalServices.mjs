const owAPIkey = `bb3a4338529ff49a475fac98f7e5cc42`;
const lat = `38.89511`;
const lon = `-77.03637`;
const zip = 22554;
const owURL = `https://api.openweathermap.org`;
const wthrMain = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${owAPIkey}`;
const geoCode = `/geo/1.0/zip?zip=${zip},US&appid=${owAPIkey}`

async function convertToJSON(res) {
    const data = await res.json();
    if (res.ok){
        return data;
    } else {
        throw error('Error: Fetching data');
    }
}


  export async function returnAPI(rtn){
        const response = await fetch(owURL + `${rtn}`);
        const data = await convertToJSON(response);
        return data;
    }

    