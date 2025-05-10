function calcular(){
    let resultado = document.getElementById('resultado');

    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    
    
    let imc = peso / (altura * altura);
    
    if(altura <= 0 || peso <= 0){
        resultado.innerHTML = "Insira um valor valido";
    } else {
        resultado.innerHTML = "Seu IMC é: " + imc;
    }
    
    let body = document.getElementById('bg');
    let resultado2 = document.getElementById('resultado2');
    if(imc < 19.1 && imc > 0){
        resultado2.innerHTML = "Abaixo do peso normal";
        body.style.backgroundColor = '#188796';
    } else if(imc >= 19.1 && imc <= 25.8){
        resultado2.innerHTML = "Peso normal";
        body.style.backgroundColor = '#38bd17';
    } else if(imc >= 25.9 && imc <= 27.3){
        resultado2.innerHTML = "Levemente acima do peso";
        body.style.backgroundColor = '#8bbd17';
    } else if(imc >= 27.4 && imc <= 32.3){
        resultado2.innerHTML = "Acima do peso";
        body.style.backgroundColor = '#e7d31a';
    } else if (imc >= 32.3) {
        resultado2.innerHTML = "Obesidade";
        body.style.backgroundColor = '#ff1010';
    } else {
        resultado2.innerHTML = "Valor inválido ou indefinido";
    }
    
}
