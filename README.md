# Desafios - DIO
Desafios propostos pelo Felipe Aguiar (DIO), durante o Bootcamp Potência Tech IFood - Programação do Zero 

## Classificador de Nível de Herói
Esse desafio foi proposto pelo Felipe Aguiar (Tech Educator, DIO), durante o Bootcamp Potência Tech IFood - Programação do Zero.

### Objetivo
* Criar uma variável para armazenar o nome do herói
* Criar uma variável para armazenar a quantidade de experiência (XP do herói
* Utilizar uma estrutura de decisão para apresentar alguma das mensagens abaixo:
  Se XP for menor do que 1.000 = Ferro
  Se XP for entre 1.001 e 2.000 = Bronze
  Se XP for entre 2.001 e 5.000 = Prata
  Se XP for entre 6.001 e 7.000 = Ouro
  Se XP for entre 7.001 e 8.000 = Platina
  Se XP for entre 8.001 e 9.000 = Ascendente
  Se XP for entre 9.001 e 10.000= Imortal
  Se XP for maior ou igual a 10.001 = Radiante

### Saída
Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

 ## Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

### Objetivo:
* Criar uma função que recebe com parâmetro => quantidade de vitórias e quantidade de derrotas de um jogador.
* Retornar o resultado para uma variável.
* Saldo de Rankeadas => (vitórias - derrotas)
  Se vitórias for menor do que 10 = Ferro
  Se vitórias for entre 11 e 20 = Bronze
  Se vitórias for entre 21 e 50 = Prata
  Se vitórias for entre 51 e 80 = Ouro
  Se vitórias for entre 81 e 90 = Diamante
  Se vitórias for entre 91 e 100= Lendário
  Se vitórias for maior ou igual a 101 = Imortal
  
### Saída
Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

## Escrevendo as classes de um Jogo

### Objetivo:
* Criar uma classe genérica que represente um herói de aventura e que possua as seguintes propriedades:
  - nome
  - idade
  - tipo (ex: guerreiro, mago, monge, ninja)

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
  - exibir a mensagem: "o {tipo} atacou usando {ataque}")
  - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
  - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

  se mago -> no ataque exibir (usou magia)
  se guerreiro -> no ataque exibir (usou espada)
  se monge -> no ataque exibir (usou artes marciais)
  se ninja -> no ataque exibir (usou shuriken)

### Saída
Ao final deve se exibir uma mensagem:
- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 
