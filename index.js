/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNumber = document.getElementById('input-number')
const converBtn = document.getElementById('convert-btn')
const lengthP = document.getElementById('length')
const volumeP = document.getElementById('volume')
const massP = document.getElementById('mass')


converBtn.addEventListener('click', function() {
    let inputNumberValue = Number(inputNumber.value)
    console.log(inputNumberValue)
    render(inputNumberValue)
})



function render(inputNumberValue) {
    let metersToFeetConv = (inputNumberValue * 3.281).toFixed(3)
    let feetToMeterConv = (inputNumberValue / 3.281).toFixed(3)
    let literToGallonsConv = (inputNumberValue * 0.264).toFixed(3)
    let gallonsToLiterConv = (inputNumberValue / 0.264).toFixed(3)
    let kilogramsToPoundsConv= (inputNumberValue * 2.204).toFixed(3)
    let poundsToKilogramsConv= (inputNumberValue / 2.204).toFixed(3)
    lengthP.innerHTML = `${inputNumberValue} meters = ${metersToFeetConv} feet | ${inputNumberValue} feet = ${feetToMeterConv} meters`
    volumeP.innerHTML = `${inputNumberValue} liters = ${literToGallonsConv} gallons | ${inputNumberValue} gallons = ${gallonsToLiterConv} liters`
    massP.innerHTML = `${inputNumberValue} kilos = ${kilogramsToPoundsConv} pounds | ${inputNumberValue} pounds = ${poundsToKilogramsConv} kilos`
}


