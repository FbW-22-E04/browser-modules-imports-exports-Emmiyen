import { modulo, percentage, percentageOf, difference } from "./percentage.js";
// import * as Percentage from "./percentage.js";
const modulo1 = document.querySelector("#modulo_1");
const modulo2 = document.querySelector("#modulo_2");

const percentage1 = document.querySelector('#percentage_1')
const percentage2 = document.querySelector('#percentage_2')
const percentageResult = document.querySelector('#percentage_result')



const moduloResult = document.querySelector("#modulo_result");
modulo1.addEventListener("input", () => {
  const outputModulo = modulo(+modulo1.value, +modulo2.value);
  moduloResult.value = outputModulo;
});
modulo2.addEventListener("input", () => {
  const outputModulo = modulo(+modulo1.value, +modulo2.value);
  moduloResult.value = outputModulo;
});



percentage1.addEventListener('input', ()=>{
    const outputPercentage = percentage(+percentage1.value, +percentage2.value)
    percentageResult.value =outputPercentage
})

percentage2.addEventListener('input', ()=>{
    const outputPercentage= percentage(+percentage2.value, +percentage1.value)
    percentageResult.value =outputPercentage
})