//let's get all required elemnets


const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST","MUNDACORPPHP.PHP", true);
    xhr.onload = ()=>{
       if(xhr.readyState == 4 && xhr.status == 200){//if ajax response status is 200 & ready status is 4 means there is no any error 
         let response = xhr.response;//storing ajax response in a response variable
         console.log(response);
       }
    }
    xhr.send();
}