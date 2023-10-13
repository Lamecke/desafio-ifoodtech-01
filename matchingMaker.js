
function matchingMaker(win, defeat) {
    let wins = win - defeat
    let rank = ""
    if (wins <= 10)
        rank = "Ferro"
    else if (wins > 10 && wins <= 20)
        rank = "Bronze"
    else if (wins > 10 && wins <= 20)
        rank = "Prata"
    else if (wins > 20 && wins <= 30)
        rank = "Ouro"
    else if (wins > 30 && wins <= 40)
        rank = "Platina"
    else if (wins > 40 && wins <= 70)
        rank = "Ascendente"
    else if (wins > 70 && wins <= 90)
        rank = "Imortal"
    else if (wins > 90 && wins <= 100)
        rank = "Radiante"
    console.log("O Herói tem de saldo de " + wins + " Vitorias e está no nível de " + rank)

}

exports.matchingMaker = matchingMaker