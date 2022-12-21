function calcule(){
    let height = document.getElementById('height').value / 100;
    let weight = document.getElementById('weight').value;

    let imc = (weight / (height * height)).toFixed(1);
    let res = ''
    if(height == "" || weight == ""){
        alert('ERRO, Digite sua altura e idade corretamente!')
    }else if(imc < 18.56){
        res =`Seu IMC é ${imc}`;
    }else if(imc < 24.9){
        res =`Seu IMC é ${imc}`;
    }else if(imc < 39.9){
        res =`Seu IMC é ${imc}`;
    }else if(imc < 39.9){
        res =`Seu IMC é ${imc}`;
    }else{
        res =`Seu IMC é ${imc}`;
    }
    document.getElementById('res').innerText= res
}

function limpar(){
    document.getElementById('height').value = ''
    document.getElementById('weight').value = ''
    document.getElementById('res').value = ''
}