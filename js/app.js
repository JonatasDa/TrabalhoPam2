function calcular(){
    let peso = document.querySelector('#peso')
    let altura = document.querySelector('#altura')

    let imc = peso.value / (altura.value * altura.value)

    console.log(imc.value)

}