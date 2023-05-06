const IMCButton = document.querySelector('#submit');
const IMCValue = document.querySelector('#imc-value');
const benedict = document.querySelector('#value-benedict');
const mifflin = document.querySelector('#value-mifflin');
const ETABennedict = document.querySelector('#eta-value-benedict');
const ETAMifflin = document.querySelector('#eta-value-mifflin');
const FAFBennedict = document.querySelector('#faf-value-benedict');
const FAFMifflin = document.querySelector('#faf-value-mifflin');
const idealWeight = document.querySelector("#ideal-weight");
const adjustedWeight = document.querySelector("#adjusted-weight");


const calcIMC = (weight, size) => {
    return weight / ((size / 100) * (size / 100));
}

const calcBenedict = (weight, size, age, gender) => { }
const calcMifflin = (weight, size, age, gender) => { }
const calcETA = (calcForm) => { return calcForm*0.1 }
const calcFAF = () => { }
const calcWeight = (weight, size) =>{
    return {
        pesoIdeal: size-100,
        pesoAjustado: ((weight-(size-100))*0.25)+(size-100)
    }
}

IMCButton.addEventListener('click', () => {
    const age = document.querySelector('#age').value;
    const size = document.querySelector('#size').value;
    const weight = document.querySelector('#weight').value;
    const IMC = weight / ((size / 100) * (size / 100));
    let gender = document.querySelectorAll('input[name="gender"]');
    gender = (gender[0].checked ? gender[0].value : gender[1].value);
    const faf = document.querySelectorAll('#physical-activity')[0].value;
    
    // Calculos
    const weights = calcWeight(weight, size);
    
    // variales de resultado
    IMCValue.innerHTML = IMC.toFixed(2);
    idealWeight.innerHTML = weights.pesoIdeal;
    adjustedWeight.innerHTML = weights.pesoAjustado;
})