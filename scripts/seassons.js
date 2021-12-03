//ex6
accessTime = new Date();

function currentSeasson(){

    let mouth = accessTime.getMonth();
    let day = accessTime.getDay();

    //Considere: 22/12 a 21/03 - Verão; 22/03 a 21/06 - Outono; 22/06 a 21/09 - Inverno; 22/09 a 21/12 - Primavera.

    if(9 >= day >= 12 && 9 >= mouth >= 12){
        changeText("Primavera");
        changeImage("img/primavera.jpg");
    }
    else if(22 >= day >= 21 && 6 >= mouth >= 9){
        changeText("Inverno");
        changeImage("img/inverno.jpg");
    }
    else if(3 >= day >= 6 && 21 >= mouth >= 22){
        changeText("Outono");
        changeImage("img/outono.jpg");
    }
    else{
        changeText("Verão");
        changeImage("img/verao.jpg");
    }

    
}

let dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));

dayOfYear(new Date(2020, 04, 16));      // 137

function changeText(txt) {
    document.getElementById('currentSessonTxt').innerText = txt;
}
function changeImage(img) {
    document.getElementById("currentSessonImg").src = img;
}

currentSeasson()
