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
const benedictTotalValue = document.querySelector("#benedict-total-value");
const mifflinTotalValue = document.querySelector("#mifflin-total-value");


const calcIMC = (weight, size) => {
    return weight / ((size / 100) * (size / 100));
}

const calcBenedict = (weight, size, age, gender) => {
    if (gender === "Masculino"){
        return Math.round(66.5+(13.75*weight)+(5*size)-(6.78*age));
    }
    else{
        return Math.round(655+(9.6*weight)+(1.85*size)-(4.68*age));
    }
}
const calcMifflin = (weight, size, age, gender) => {
    if (gender === "Masculino"){
        return Math.round((10*weight) + (6.25*size) - (5*age) + 5);
    }
    else{
        return Math.round((10*weight) + (6.25*size) - (5*age) - 161);
    }
}
const calcETA = (tmb) => { return Math.round(tmb*0.1) }

const calcFAF = (tmb,faf) => {
    console.log(tmb,faf);
    if (faf === "1"){return Math.round(tmb*0.15)}
    else if (faf === "2"){return Math.round((tmb*1.3)-tmb)}
    else if (faf === "3"){return Math.round(tmb*0.45)}
    else{return Math.round(tmb*0.60)}
}

const calcWeight = (weight, size) =>{
    return {
        pesoIdeal: Math.round(size-100),
        pesoAjustado: Math.round(((weight-(size-100))*0.25)+(size-100))
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
    const benedictFAFResult = calcFAF(benedictResult, faf);
    const mifflinFAFResult = calcFAF(mifflinResult, faf);
    // variales de resultado
    IMCValue.innerHTML = IMC.toFixed(2);
    idealWeight.innerHTML = weights.pesoIdeal;
    adjustedWeight.innerHTML = weights.pesoAjustado;
    benedict.innerHTML = benedictResult;
    mifflin.innerHTML = mifflinResult;
    ETABennedict.innerHTML = calcETA(benedictResult)
    ETAMifflin.innerHTML = calcETA(mifflinResult)
    FAFBennedict.innerHTML = benedictFAFResult;
    FAFMifflin.innerHTML = mifflinFAFResult;
    benedictTotalValue.innerHTML = (benedictResult + calcETA(benedictResult) + benedictFAFResult);
    mifflinTotalValue.innerHTML = (mifflinResult + calcETA(mifflinResult) + mifflinFAFResult);
})