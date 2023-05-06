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
const tableSection = document.querySelector(".table-section");


const calcIMC = (weight, size) => {
    return weight / ((size / 100) * (size / 100));
}

const calcBenedict = (weight, size, age, gender) => {
    if (gender === "Masculino"){
        return 66.5+(13.75*weight)+(5*size)-(6.78*age);
    }
    else{
        return 655+(9.6*weight)+(1.85*size)-(4.68*age);
    }
}
const calcMifflin = (weight, size, age, gender) => {
    if (gender === "Masculino"){
        return (10*weight) + (6.25*size) - (5*age) + 5;
    }
    else{
        return (10*weight) + (6.25*size) - (5*age) - 161;
    }
}
const calcETA = (tmb) => { return tmb*0.1 }

const calcFAF = (tmb,faf) => {
    if (faf === 1){}
    else if (faf === 2){}
    else {}
}

const calcWeight = (weight, size) =>{
    return {
        pesoIdeal: size-100,
        pesoAjustado: ((weight-(size-100))*0.25)+(size-100)
    }
}

IMCButton.addEventListener('click', () => {
    tableSection.style.display = "block"
    const age = document.querySelector('#age').value;
    const size = document.querySelector('#size').value;
    const weight = document.querySelector('#weight').value;
    const IMC = weight / ((size / 100) * (size / 100));
    let gender = document.querySelectorAll('input[name="gender"]');
    gender = (gender[0].checked ? gender[0].value : gender[1].value);
    const faf = document.querySelectorAll('#physical-activity')[0].value;
    
    // Calculos
    const weights = calcWeight(weight, size);
    const benedictResult = calcBenedict(weight, size, age, gender);
    const mifflinResult = calcMifflin(weight, size, age, gender);
    // variales de resultado
    IMCValue.innerHTML = IMC.toFixed(2);
    idealWeight.innerHTML = weights.pesoIdeal;
    adjustedWeight.innerHTML = weights.pesoAjustado;
    benedict.innerHTML = benedictResult;
    mifflin.innerHTML = mifflinResult;
    ETABennedict.innerHTML = calcETA(benedictResult)
    ETAMifflin.innerHTML = calcETA(mifflinResult)
})