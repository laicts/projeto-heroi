// ler o prompt
const prompt = require ("prompt-sync")({sigint: true})

// nome do Héroi
let nomeHeroi = prompt("Digite o nome do herói: ");

// inicio
console.log("Olá " + nomeHeroi + "\n" + "Bem vindo ao classificador de herói!! ");
let xpQuantidade = prompt("Digite sua quantidade de XP: ");

// estrutura 
if (xpQuantidade < 1000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Ferro.")
} else if (xpQuantidade >= 1001 && xpQuantidade <= 2000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Bronze.")
} else if (xpQuantidade >= 2001 && xpQuantidade <= 5000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Prata.")
} else if (xpQuantidade >= 6001 && xpQuantidade <= 7000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Ouro.")
} else if (xpQuantidade >= 7001 && xpQuantidade <= 8000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Platina.")
} else if (xpQuantidade >= 8001 && xpQuantidade <= 9000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Ascendente.")
} else if (xpQuantidade >= 9001 && xpQuantidade <= 10000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Imortal.")
} else if (xpQuantidade >= 10001) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Radiante")
} else {
    console.log("Herói sem classificação")
}


