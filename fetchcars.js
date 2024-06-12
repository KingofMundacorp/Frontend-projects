import { showLoading, hideLoading } from "./toggleLoading.js";
const fetchCars = async(url)=>{
    showLoading();
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;

    }catch(error){
        console.log(error);
    }
    finally{
        hideLoading();
    }
}
export default fetchCars;