// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const botao = document.querySelector('#calcular')

botao.addEventListener('click', () => {
    const g = document.querySelector('#constante').value
    const massa1 = document.querySelector('#massa1').value
    const massa2 = document.querySelector('#massa2').value
    const d = document.querySelector('#distancia').value

    const resultado = document.querySelector('#resultado')

    const result = (g*massa1*massa2)/(d*d)

    resultado.value = result
})