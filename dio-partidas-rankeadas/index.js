/*# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 
*/
let vitorias = 15;
let derrotas = 5;
let rank;

const saldoVitorias = vitorias - derrotas;

function saldoRankeadas(vitorias, derrotas){
    if(vitorias <10){
        rank = "Ferro" 
    }
    else if(vitorias >= 11 && vitorias >= 20){
        rank = "Bronze"
    }
    else if(vitorias >= 21 && vitorias >= 50){
        rank = "Prata"
    }
    else if(vitorias >= 51 && vitorias >= 80){
        rank = "Ouro"
    }
    else if(vitorias >= 81 && vitorias >= 90){
        rank = "Diamante"
    }
    else if(vitorias >= 91 && vitorias >= 100){
        rank = "Lendário"
    }
    else if(vitorias >= 101){
        rank = "Imortal"
    }
    

    return saldoVitorias;
}
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${rank}`)