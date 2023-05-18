let celciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let tempChng = document.querySelector('.buttonContainer > #change');
tempChng.addEventListener("click", changeTemperature);

function CelsiusConvert(cel){
    const fah = (cel * (9 / 5)) + 32;
    const kel = cel + 273.15;
    fahrenheitInput.value = fah.toFixed(2);
    kelvinInput.value = kel.toFixed(2);
}
function FahrenheitConvert(fah){
    const cel = (fah - 32) * (5 / 9);
    const kel = (fah + 459.67) * (5 / 9);
    celciusInput.value = cel.toFixed(2);
    kelvinInput.value = kel.toFixed(2);
}
function KelvinConvert(kel){    
    const cel = kel - 273.15;
    const fah = (kel * (9 / 5)) - 459.67;    
    celciusInput.value = cel.toFixed(2);
    fahrenheitInput.value = fah.toFixed(2);
}  

function changeTemperature(){
    const cel = parseFloat(celciusInput.value);
    const fah = parseFloat(fahrenheitInput.value);
    const kel = parseFloat(kelvinInput.value);
    if (!isNaN(cel)) {
        CelsiusConvert(cel);
    } else if (!isNaN(fah)) {
        FahrenheitConvert(fah);
    } else if (!isNaN(kel)) {
        KelvinConvert(kel);
    } else {
        alert("Input is Empty");
    }
}

let btn = document.querySelector('.buttonContainer > #clear');
btn.addEventListener("click", clearData);
function clearData() {
    celciusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
}


