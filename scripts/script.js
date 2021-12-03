
ageCal.addEventListener('click', function(){
    let inputDate = new Date(document.getElementById('inputData').value);
    let currentTime = new Date();
    let result = currentTime.getFullYear() - inputDate.getFullYear();

    document.getElementById('ageResult').innerHTML = result;
})



