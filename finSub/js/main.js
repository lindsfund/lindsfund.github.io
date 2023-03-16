import { loadHeaderFooter, kelToFah } from "./utils.mjs";
import { getLocation } from "./apiReturns.mjs";



const zip = 22554;



loadHeaderFooter();
const location = await getLocation(zip);
//console.log(location);


















