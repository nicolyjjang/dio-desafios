def saldoRankeadas(vitorias, derrotas):
    saldoVitorias = vitorias - derrotas
    rank = ""

    if vitorias < 10:
        rank = "Ferro"
    elif vitorias >= 11 and vitorias <= 20:
        rank = "Bronze"
    elif vitorias >= 21 and vitorias <= 50:
        rank = "Prata"
    elif vitorias >= 51 and vitorias <= 80:
        rank = "Ouro"
    elif vitorias >= 81 and vitorias <= 90:
        rank = "Diamante"
    elif vitorias >= 91 and vitorias <= 100:
        rank = "Lendário"
    elif vitorias >= 101:
        rank = "Imortal"

    return saldoVitorias, rank

vitorias = 150
derrotas = 5

saldoVitorias, rank = saldoRankeadas(vitorias, derrotas)

print(f"O Herói tem um saldo de {saldoVitorias} e está no nível de {rank}")
