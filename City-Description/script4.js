const button = document.querySelector("button");
button.addEventListener("click",displaythat);

let resultdiv = document.createElement("div");
resultdiv.id = "result";
document.getElementById("warpper").appendChild(resultdiv);

function displaythat(){
    const input = document.getElementById("input");
    const city = input.options[input.selectedIndex].value;
    let population = 0;
    let literacyRate = 0;
    let language = "";
    
    switch(city){
        case "Bangaluru":
            population = 89873245;
            literacyRate = 88.53;
            language = "kannada";
            break;
        case "Chennai":
            population = 74766375;
            literacyRate = 89.34;
            language = "Tamil";
            break;
        case "Mumbai": 
            population = 87362736;
            literacyRate = 84.93;
            language = "Marathi";
            break;
        case "Delhi":
            population = 73273465;
            literacyRate = 65.43;
            language = "Hindi";
            break;
        case "Kashmir":
            population = 595655;
            literacyRate = 84.43;
            language = "Hindi";
            break;  
    }
    let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacyRate is ${literacyRate}%`;
    document.getElementById("result").innerHTML = text;
}