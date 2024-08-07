function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
       //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} ➡️` 
            }    
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += ` ${c} ➡️`
            }
        }
        res.innerHTML += '🏁'
    }
        
}


/* -------- CODIGO COMENTADO -------- */

function contar() { // Define a função chamada 'contar'
    let ini = document.getElementById('txti') // Obtém o elemento com o ID 'txti' e o armazena na variável 'ini'
    let fim = document.getElementById('txtf') // Obtém o elemento com o ID 'txtf' e o armazena na variável 'fim'
    let passo = document.getElementById('txtp') // Obtém o elemento com o ID 'txtp' e o armazena na variável 'passo'
    let res = document.getElementById('res') // Obtém o elemento com o ID 'res' e o armazena na variável 'res'

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // Verifica se algum dos campos está vazio
        res.innerHTML = 'Impossivel contar!' // Se algum campo estiver vazio, exibe a mensagem 'Impossível contar!'
       //window.alert('[ERRO] Faltam dados!') // Comentado: exibe um alerta se algum campo estiver vazio
    } else { // Caso contrário, se todos os campos estiverem preenchidos
        res.innerHTML = 'Contando: <br>' // Define o conteúdo inicial do elemento 'res'
        let i = Number(ini.value) // Converte o valor do campo 'ini' para um número e o armazena na variável 'i'
        let f = Number(fim.value) // Converte o valor do campo 'fim' para um número e o armazena na variável 'f'
        let p = Number(passo.value) // Converte o valor do campo 'passo' para um número e o armazena na variável 'p'
        if (p <= 0) { // Verifica se o valor de 'p' é menor ou igual a 0
            window.alert('Passo inválido! Considerando PASSO 1') // Exibe um alerta informando que o passo é inválido
            p = 1 // Define o valor de 'p' como 1
        }
        if (i < f) { // Verifica se 'i' é menor que 'f' para contagem crescente
            // Contagem crescente
            for(let c = i; c <= f; c += p) { // Loop de 'i' até 'f' incrementando por 'p'
                res.innerHTML += ` ${c} ➡️` // Adiciona o valor de 'c' e uma seta ao conteúdo de 'res'
            }    
        } else { // Caso contrário, contagem regressiva
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) { // Loop de 'i' até 'f' decrementando por 'p'
                res.innerHTML += ` ${c} ➡️` // Adiciona o valor de 'c' e uma seta ao conteúdo de 'res'
            }
        }
        res.innerHTML += '🏁' // Adiciona uma bandeira ao final da contagem
    }
}