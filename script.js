function calculate(){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    let imc = (weight / (height * height));
    let res = document.getElementById('res');
    res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;

    if(height == "" || weight == ""){
        alert('ERRO, Digite sua altura e idade corretamente!')
    }else if(imc < 18.56){
        res =`Seu IMC é ${imc}`;
    }else if(imc < 24.9){
        res =`Seu IMC é ${imc}`;
    }else if(imc < 39.9){
        res =`Seu IMC é ${imc}`;
    }else{
        res =`Seu IMC é ${imc}`;
    }

    const clear = document.getElementById('limpar');
    clear.addEventListener('click', () =>{
        document.getElementById('height').value = ''
        document.getElementById('weight').value = ''
        document.getElementById('res').value = ''
    })
}