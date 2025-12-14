let resultLength = document.getElementById("result-length")
let resultVolume = document.getElementById("result-volume")
let resultMass = document.getElementById("result-mass")
const inputTxt = document.getElementById("input-txt")


document.getElementById("convert-btn").addEventListener("click", function () {
    const meterTofeet = Number(inputTxt.value) * 3.281
    const feetTometer = Number(inputTxt.value) * (1 / 3.281)
    const literTogallon = inputTxt.value * 0.264
    const gallonToliter = inputTxt.value * (1 / 0.264)
    const kilosTopounds = inputTxt.value * 2.204
    const poundsTokilos = inputTxt.value * (1 / 2.204)

    resultLength.textContent = ` ${inputTxt.value} meters = ${meterTofeet.toFixed(3)} feet | ${inputTxt.value} feet = ${feetTometer.toFixed(3)} meters`
    resultVolume.textContent = ` ${inputTxt.value} liters = ${literTogallon.toFixed(3)} gallons | ${inputTxt.value} gallons = ${gallonToliter.toFixed(3)} liters`
    resultMass.textContent = ` ${inputTxt.value} kilos = ${kilosTopounds.toFixed(3)} pounds | ${inputTxt.value} pounds = ${poundsTokilos.toFixed(3)} kilos`
})
