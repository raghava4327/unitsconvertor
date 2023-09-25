/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let unitNames=["Length (Meter/Feet)",
"Volume (Liters/Gallons)",
"Mass (Kilograms/Pounds)"]
let units=document.getElementById("units")
let button=document.getElementById("convert-btn")
let resultContainer=document.getElementById('units-convert-section')
let conversions=["0 meters = 0 feet | 0 feet = 0 meters",
"0 liters = 0 gallons | 0 gallons = 0 liters",
"0 kilos = 0 pounds | 0 pounds = 0 kilos"]
render(conversions)
function render(conversions){
    addEl=''
    for(let i=0;i<unitNames.length;i++){
        addEl+=`
        <div class="units-output-card">
        <p>${unitNames[i]}</p>
        <p>${conversions[i]}</p>
        </div>`
    }
    resultContainer.innerHTML=addEl
}
button.addEventListener("click",function(){
    let x=units.value
    let feet=(3.282*x).toFixed(3)
    let meters=(x/3.282).toFixed(3)
    let liters=(0.264*x).toFixed(3)
    let gallons=(x/0.264).toFixed(3)
    let kilograms=(2.204*x).toFixed(3)
    let pounds=(x/2.204).toFixed(3)
    conversions=[` ${x} meters = ${feet} feet | ${x} feet = ${meters} meters`,
    ` ${x} liters = ${gallons} gallons | ${x} gallons = ${liters} liters`,
    `${x}  kilos = ${pounds}  pounds | ${x}  pounds = ${kilograms} kilos`]
    render(conversions)
})

