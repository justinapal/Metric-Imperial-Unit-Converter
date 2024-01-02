
const inputEl = document.getElementById("input")
const buttonEl = document.getElementById("convert-btn")
const meterP = document.getElementById("meters-converted")
const litersP = document.getElementById("liters-converted")
const kilogramsP = document.getElementById("kilograms-converted")
const convertedMetricsContainers = document.querySelectorAll(".converted-metrics")

const originalWidth = 117

inputEl.addEventListener("input", function(){
    if(inputEl.value === "") {
        inputEl.style.width = originalWidth + "px"
    }
    else {
        let maxWidth = 550
        let calculatedWidth = inputEl.value.length * 50
        inputEl.style.width = (calculatedWidth > maxWidth) ? maxWidth + "px" :  calculatedWidth + "px"
    }
    
})


buttonEl.addEventListener("click", function(){
    
    let inputValue = inputEl.value 
    let metersToFeet = inputEl.value * 3.281
    let feetToMeters = inputEl.value / 3.281
    let litersTogallons = inputEl.value * 0.264
    let gallonsToLiters = inputEl.value / 0.264
    let kilogramsToPounds = inputEl.value * 2.205
    let poundsToKilograms = inputEl.value / 2.205
    
    meterP.innerHTML = `<p>${inputValue} meters = ${metersToFeet.toFixed(2)} feet | ${inputValue} feet = ${feetToMeters.toFixed(2)} meters</p>`
    litersP.innerHTML = `<p>${inputValue} liters = ${litersTogallons.toFixed(2)} gallons | ${inputValue} gallons = ${gallonsToLiters.toFixed(2)} liters`
    kilogramsP.innerHTML = `<p>${inputValue} kilograms = ${kilogramsToPounds.toFixed(2)} pounds | ${inputValue} pounds = ${poundsToKilograms.toFixed(2)} kilograms</p>` 

    
    convertedMetricsContainers.forEach(container => {
        container.style.height = container.scrollHeight + "px";
        container.style.paddingLeft = "10px";
        container.style.paddingRight = "10px";
    });

    
})


