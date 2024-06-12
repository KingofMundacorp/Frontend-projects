import getElement from "./getElement.js";
import presentDrinks from "./presentcars.js";
import {URL} from "../Munda2.js";

const form = getElement(".car-form");
const input = getElement('[name="super car"]');
form.addEventListener("keyup", function(e){
    

    const value = input.value;
    if(!value){
        presentcars(`${URL}a`);
    }
    else{
        presentcars(`${URL}${value}`);
    }
})