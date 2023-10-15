//declarando variaveis
let heroi = "Chiara"
let xp = 6841
//declarando constantes
const mensagem1 = "O Herói de nome " 
const mensagem2 = " está no nível de "

if (xp <= 1000){
    console.log(mensagem1 + heroi + mensagem2 + "Ferro")
}
else if (xp >= 1001 && xp <= 2000){
    console.log(mensagem1 + heroi + mensagem2 + "Bronze")
}
else if (xp >= 2001 && xp <= 5000){
    console.log(mensagem1 + heroi + mensagem2 + "Prata")
}
else if (xp >= 6001 && xp <= 7000){
    console.log(mensagem1 + heroi + mensagem2 + "Ouro")
}
else if (xp >= 7001 && xp <=8000){
    console.log(mensagem1 + heroi + mensagem2 + "Platina")
}
else if (xp >= 8001 && xp <=9000){
    console.log(mensagem1 + heroi + mensagem2 + "Ascendente")
}
else if (xp >= 9001 && xp <=10000){
    console.log(mensagem1 + heroi + mensagem2 + "Imortal")
}
else if (xp >= 10001){
    console.log(mensagem1 + heroi + mensagem2 + "Radiante");
}