
//ex2
function calcular(btnID){
    let MatType = document.getElementById(btnID).value;
    
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    let result;
    if (MatType == '+'){
        result = num1 + num2;
    }
    else if (MatType == '-'){
        result = num1 - num2;
    }
    else if (MatType == '*'){
        result = num1 * num2;
    }
    else if (MatType == '/'){
        result = num1 / num2;
    }

    console.log(MatType)
    console.log(result)

    document.getElementById("resultCal").innerText = result;
}

//ex3
btnPar.addEventListener('click', function(){
    let numPar = parseInt(document.getElementById('numPar').value);

    if (numPar%2 == 1){
        console.log("impar")
        document.getElementById("resultPar").innerText = "Ímpar";
    }
    else{
        console.log("par")
        document.getElementById("resultPar").innerText = "Par";
    }
})