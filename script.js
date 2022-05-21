function pedra(){

    jogador = Math.floor(Math.random()*6)+1
    computador = Math.floor(Math.random()*6)+1

    if (computador > jogador){
        alert("Você perdeu! o Computador escolheu Papel :/")

    } else if (computador < jogador){
        alert("Parabéns! Você Venceu! O Computador escolheu Tesoura")

    } else if (computador == jogador){
        alert("Empate!")
    }
}

function papel(){

    jogador = Math.floor(Math.random()*6)+1
    computador = Math.floor(Math.random()*6)+1

    if (computador > jogador){
        alert("Você perdeu! O Computador escolheu Tesoura :/")

    } else if (computador < jogador){
        alert("Parabéns! Você Venceu! O computador escolheu Pedra")

    } else if (computador == jogador){
        alert("Empate!")
    }
}

function tesoura(){

    jogador = Math.floor(Math.random()*6)+1
    computador = Math.floor(Math.random()*6)+1

    if (computador > jogador){
        alert("Você perdeu! O Computador escolheu Pedra :/")

    } else if (computador < jogador){
        alert("Parabéns! Você Venceu! O computador escolheu Papel")

    } else if (computador == jogador){
        alert("Empate!")
    }
}