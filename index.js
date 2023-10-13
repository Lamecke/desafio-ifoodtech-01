let name="bigode"
function heroLevel(xp){
    switch(true){
        case  xp <= 1000:
            return "Ferro"
        break; 
        case  xp > 1000 && xp <= 2000:
            return "Bronze"
        break; 
        case  xp > 2000 && xp <= 5000:
            return "Prata"
        break; 
        case  xp > 5000 && xp <= 7000:
            return "Ouro"
        break; 
        case  xp > 7000 && xp <= 8000:
            return "Platina"
        break; 
        case  xp > 8000 && xp <= 9000:
            return "Ascendente"
        break; case  xp > 9000 && xp < 10000:
        return "Imortal"
        break; 
        case  xp >= 10001:
            return "Radiante"
        break; 
        default:
            return "desconhecido"
        break;
    }
}
console.log( "O Herói de nome "+ name +" está no nível " + heroLevel(5000))
