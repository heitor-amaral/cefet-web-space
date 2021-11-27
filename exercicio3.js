// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const paragrafos = document.querySelectorAll('.botao-expandir-retrair')

paragrafos.forEach((p) => {
    p.addEventListener('click', (e) => {
        const elementoPai = e.currentTarget.parentNode
        const elementoAtul = e.currentTarget

        if(elementoAtul.textContent == '+') {
            elementoAtul.textContent = '-'
        } else {
            elementoAtul.textContent = '+'
        }
        elementoPai.classList.toggle("expandido") 
    })
})