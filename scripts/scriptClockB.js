//ex5
function currentTime(){
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let s = new Date().getSeconds();

    document.getElementById('time').innerText = update(hour) + ":" + update(minute) + ":" + update(s);
    
    setInterval(currentTime, 1000);
}

const update = (number) => {
    return number < 10 ? `0${number}` : number;
}

currentTime();