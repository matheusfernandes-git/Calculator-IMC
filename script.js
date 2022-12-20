function calcule(){
    let height = document.getElementById('height').value / 100;
    let weight = document.getElementById('weight').value;

    let imc = (weight / (height ** 2)).toFixed(2)
    let res = ''
    if(height == "" || weight == ""){
        alert('ERRO, Digite sua altura e idade corretamente!')
    }else if(imc < 18.5){
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