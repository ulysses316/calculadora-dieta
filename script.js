const IMCButton = document.querySelector('#submit');
const IMCValueBe = document.querySelector('#imc-value-benedict');
const IMCValueMi = document.querySelector('#imc-value-mifflin');
const benedict = document.querySelector('#value-benedict');
const mifflin = document.querySelector('#value-mifflin');
const ETABennedict = document.querySelector('#eta-value-benedict');
const ETAMifflin = document.querySelector('#eta-value-mifflin');
const FAFBennedict = document.querySelector('#faf-value-benedict');
const FAFMifflin = document.querySelector('#faf-value-mifflin');


const calcIMC = (weight, size) => {
    return weight / ((size / 100) * (size / 100));
}

const calcBenedict = (imc, gender) => { }
const calcMifflin = (imc, gender) => { }
const calcETA = () => { }
const calcFAF = () => { }

IMCButton.addEventListener('click', () => {
    const age = document.querySelector('#age').value;
    const size = document.querySelector('#size').value;
    const weight = document.querySelector('#weight').value;
    const IMC = weight / ((size / 100) * (size / 100));
    let gender = document.querySelectorAll('input[name="gender"]');
    gender = (gender[0].checked ? gender[0].value : gender[1].value);
    const faf = document.querySelectorAll('#physical-activity')[0].value;
    
    // variales de resultado
    IMCValueBe.innerHTML = IMC.toFixed(2);
    IMCValueMi.innerHTML = IMC.toFixed(2);

})