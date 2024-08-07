function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` 
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}

/* -------- CODIGO COMENTADO --------- */

function tabuada() { // Define a função chamada 'tabuada'
    let num = document.getElementById('txtn') // Obtém o elemento com o ID 'txtn' e o armazena na variável 'num'
    let tab = document.getElementById('seltab') // Tenta obter o elemento com o ID 'seltab', mas há um erro aqui: 'seltab' não está entre aspas
    if (num.value.length == 0) { // Verifica se o valor do campo 'num' está vazio
        window.alert('Por favor, digite um numero!') // Exibe um alerta se o campo estiver vazio
    } else { // Caso contrário, se o campo não estiver vazio
        let n = Number(num.value) // Converte o valor do campo 'num' para um número e o armazena na variável 'n'
        let c = 1 // Inicializa a variável 'c' com o valor 1
        tab.innerHTML = '' // Limpa o conteúdo do elemento 'tab'
        while (c <= 10) { // Inicia um loop que vai de 1 a 10
            let item = document.createElement('option') // Cria um novo elemento 'option'
            item.text = `${n} x ${c} = ${n*c}` // Define o texto do elemento 'option' com o resultado da multiplicação
            item.value = `tab${c}` // Define o valor do elemento 'option'
            tab.appendChild(item) // Adiciona o elemento 'option' ao elemento 'tab'
            c++ // Incrementa a variável 'c' em 1
        }
    }
}