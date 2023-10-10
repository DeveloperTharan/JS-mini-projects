let AMPM = document.getElementById('AMPM')

function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    if(hr>12){
        hr = hr - 12;
        AMPM.innerHTML = 'PM'
    }
    else{
        AMPM.innerHTML = 'AM'
    }
    document.getElementById('hours').innerHTML = addzero(hr);
    document.getElementById('min').innerHTML = addzero(min);
    document.getElementById('sec').innerHTML = addzero(sec);
}

function addzero(num){
    return num<10?'0'+num:num;
}

setInterval(displayTime,1000);