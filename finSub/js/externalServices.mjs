
//convert data to JSON
export async function convertToJSON(res) {
    const data = await res.json();
    if (res.ok){
        return data;
    } else {
        throw {name: 'servicesError', message: data.message};
    }
}

//uses the base url...adds the rtn url extention and returns the data from the correct API
  export async function returnAPI(URL, rtn){
        const response = await fetch(URL + `${rtn}`);
        //console.log(response.json);
        const data = await convertToJSON(response);
        return data;
    }

export async function returnJSON(path) {
    const response = await fetch(path);
            //console.log(response);
    const data = await convertToJSON(response);
            //console.log(data);
    return data;
}
 