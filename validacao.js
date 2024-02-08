function verificaValidadeChute(chute) {
    //Transforma o número em inteiro
    const numero = +chute
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido!</div>`
        return
    }

    if (numeroForaFaixaValores(numero)){
        elementoChute.innerHTML += `<div>Valor fora da faixa!</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou! Parabéns!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>`
    }

    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }

    else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaFaixaValores(numero) {
    return numero > maiorValor || numero < menorValor
}