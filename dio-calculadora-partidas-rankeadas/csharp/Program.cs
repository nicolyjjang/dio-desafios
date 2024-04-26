using System;

class Program
{
    static void Main()
    {
        int vitorias = 65;
        int derrotas = 15;

        (int saldoVitorias, string rank) = saldoRankeadas(vitorias, derrotas);

        Console.WriteLine($"O Herói tem um saldo de {saldoVitorias} e está no nível de {rank}");
    }

    public static (int, string) saldoRankeadas(int vitorias, int derrotas)
    {
        int saldoVitorias = vitorias - derrotas;
        string rank;

        if (vitorias < 10)
        {
            rank = "Ferro";
        }
        else if (vitorias >= 11 && vitorias <= 20)
        {
            rank = "Bronze";
        }
        else if (vitorias >= 21 && vitorias <= 50)
        {
            rank = "Prata";
        }
        else if (vitorias >= 51 && vitorias <= 80)
        {
            rank = "Ouro";
        }
        else if (vitorias >= 81 && vitorias <= 90)
        {
            rank = "Diamante";
        }
        else if (vitorias >= 91 && vitorias <= 100)
        {
            rank = "Lendário";
        }
        else if (vitorias >= 101)
        {
            rank = "Imortal";
        }
        else
        {
            rank = "Desconhecido";
        }

        return (saldoVitorias, rank);
    }
}
