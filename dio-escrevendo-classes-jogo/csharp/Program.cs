using System;

class Heroi
{
    public string Nome { get; set; }
    public int Idade { get; set; }
    public string Tipo { get; set; }

    public Heroi(string nome, int idade, string tipo)
    {
        Nome = nome;
        Idade = idade;
        Tipo = tipo;
    }

    public void Atacar()
    {
        string ataque = "";

        switch (Tipo)
        {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "não possui um ataque específico";
                break;
        }

        Console.WriteLine($"O {Tipo} {Nome} atacou usando {ataque}");
    }
}

class Program
{
    static void Main()
    {
        Heroi heroi1 = new Heroi("Yuhuan", 18, "mago");
        Heroi heroi2 = new Heroi("Alessio", 16, "ninja");

        heroi1.Atacar();
        heroi2.Atacar();
    }
}