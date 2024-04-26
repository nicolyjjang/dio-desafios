class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo
    
    def atacar(self):
        ataque = ""

        if self.tipo == "mago":
            ataque = "magia"
        elif self.tipo == "guerreiro":
            ataque = "espada"
        elif self.tipo == "monge":
            ataque = "artes marciais"
        elif self.tipo == "ninja":
            ataque = "shuriken"
        else:
            ataque = "não possui um ataque específico"

        print(f"O {self.tipo} {self.nome} atacou usando {ataque}")

heroi1 = Heroi("Biron", 25, "guerreiro")
heroi2 = Heroi("Ji li", 30, "monge")

heroi1.atacar()
heroi2.atacar()
