let vitorias = 66;
let derrotas = 35;

function saldoRankeadas(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let rank;

    if (vitorias < 10) {
        rank = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        rank = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        rank = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        rank = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        rank = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        rank = "Lendário";
    } else if (vitorias >= 101){
        rank = "Imortal";
    }
    return {saldoVitorias, rank};
}
let {saldoVitorias, rank} = saldoRankeadas(vitorias, derrotas);

console.log(`O Herói tem um saldo de ${saldoVitorias} está no nível de ${rank}`);