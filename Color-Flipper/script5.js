const btn = document.getElementById("btn");
const colourtext = document.getElementById("colour");
const warp = document.getElementById("warp");
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
btn.addEventListener('click', changeBg);

function changeBg(){
    let hexcolour = '#';
    for(let i=1; i<=6; i++){
        hexcolour = hexcolour + randomhexvalue();
    }
    warp.style.backgroundColor = hexcolour;
    colourtext.innerHTML = hexcolour;
}

function randomhexvalue(){
    let randomhexvalue = Math.floor(Math.random()*16);
    return hex[randomhexvalue];
}
