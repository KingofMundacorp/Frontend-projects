import fetchcars from "./fetchcars.js";
import displaycars from "./displaycars.js";
import setcars from "./setcars.js";
const showCars = async (url) => {
    const data = await fetchcars(url);
    const section = displaycars(data);
    if(section){
        setCar(section);
    }
}
export default showCars;