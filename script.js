function calculate(){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    let imc = (weight / (height * height));
    imc = `${imc.toFixed(2)}`;
    let res = document.getElementById('res');

    if(height == "" || weight == ""){
        alert('ERRO, Digite sua altura e idade corretamente!');
    }else if(imc < 18.56){
        res.innerHTML =`Seu IMC é ${imc} 
MAGREZA`;
    }else if(imc < 24.9){
        res.innerHTML =`Seu IMC é ${imc}
NORMAL`;
    }else if(imc < 29.9){
        res.innerHTML =`Seu IMC é ${imc}
SOBREPESO`;
    }else if(imc < 39.9){
        res.innerHTML =`Seu IMC é ${imc}
OBESIDADE`;
    }else{
        res.innerHTML = `Seu IMC é ${imc}
OBESIDADE GRAVE`;
    }
}

const clear = document.getElementById('limpar')
    clear.addEventListener('click', () =>{
    document.getElementById('height').value = ''
    document.getElementById('weight').value = ''
})
