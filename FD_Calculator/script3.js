function GO(){
    const amount = Number(document.getElementById("input1").value);
    const months = Number(document.getElementById("input2").value);
    let rate = 0;
    if(months<3){
        rate = 0;
    }
    else if(months==3){
        rate = amount*0.05;
        val = rate + amount;
    }
    else if(months==6){
        rate = amount*0.07;
        val = rate + amount;
    }
    else if(months==12){
        rate = amount*0.09;
        val = rate + amount;
    }
    let result = document.getElementById("result");
    let result2 = document.getElementById("result2");
    result.innerHTML = "Your return in Ruppes"+" "+rate; 
    result2.innerHTML = `Total Investment
    and return`+" "+val;
}