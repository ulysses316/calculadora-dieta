const IMCButton = document.querySelector('#submit');

const calcIMC = (weight, size)=>{
    return weight / ((size/100)*(size/100));
}

IMCButton.addEventListener( 'click', ()=>{
    const age = document.querySelector('#age').value;
    const size = document.querySelector('#size').value;;
    const weight = document.querySelector('#weight').value;;
    const IMC = weight / ((size/100)*(size/100));
    let gender = document.querySelectorAll('input[name="gender"]');
    gender = (gender[0].checked ? gender[0].value : gender[1].value)

    // variales de resultado
    const IMCValueBe = document.querySelector('#imc-value-benedict');
    const IMCValueMi = document.querySelector('#imc-value-mifflin');
    IMCValueBe.innerHTML = IMC.toFixed(2);
    IMCValueMi.innerHTML = IMC.toFixed(2);
    
})