
function convert(){
    const cmv = Number(document.getElementById("input").value);
    const incv = cmv/2.54;
    const result = document.getElementById("result");
    result.innerHTML = incv.toFixed(2)+"inches";
}

