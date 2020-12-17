let idade = 18;
console.log(idade);
console.log( typeof idade);

let nome = "20";
console.log(nome);
console.log( typeof +nome);
//parseFloat é só por um+ na frente do número, igual o exemplo acima
//parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3)
//+numero1 + +numero2 + +numero3

let verdade = false;
console.log(verdade);
console.log(typeof verdade);

//para guardade mais de uma variável

let listaDeFrutas1 = "morango";
let listaDeFrutas2 = "uva";
let listaDeFrutas3 = "laranja";

console.log(listaDeFrutas1, listaDeFrutas2, listaDeFrutas3);

//mas a melhor forma de armazenar varias variaveis é
//Array --> Variável que eu consigo subdividir
let listaDeFrutas = ["Maçã", "Banana", "Limão"];
console.log(listaDeFrutas);


//o tipo dessa lista é
console.log( typeof listaDeFrutas);

//o array possui posições, cada valor do array fica armazenado em uma posição, começando em 0. Quando eu quero exibir um valor específico do array eu preciso indicar a posição onde se encontra esse valor NomeDoArray[posição]. Ex: listaDeFrutas[1]-->"Banana"
console.log(listaDeFrutas[1]);

let listaDeNotas = [5.5 , 7.9 , 9.5 , 3.0];
console.dir(listaDeNotas);
console.log(listaDeNotas[2]);


//.log exibe a informação mais "crua" traz os valores diretos, diferente do .dir pois traz a informação específica, .clear é limpar,


let personagemNome = "Eldor";
let personagemRaca = "Elfo";
let personagemClasse = "Mago";
let personagemVida = 100;
let personagemEnergia = 50;
console.log(personagemNome, personagemRaca, personagemClasse, personagemVida, personagemEnergia);

//let personagem = ["Eldor", "Elfo", "Mago", 100 , 50];
//console.dir(personagem);
//personagem[3] = 80;
//console.log(personagem);

console.log(listaDeFrutas.length);

//criando o objeto fica mais fácil achar a propriedade, é errado usar array para objetos.

let personagem = {
    "nome" : "Eldor",
    "raca" :  "Elfo",
    "classe": "Mago",
    "vida": 100,
    "energia": 50
};
console.clear()
console.dir(personagem);

//agora para alterar a vida é

console.log(personagem.vida);
console.log("Batalha");
personagem.vida = 80;
console.log(personagem.vida);

console.clear();

/*console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);*/
//isso que vamos ver é laço de repetição

//i --> incremento, i é uma variável usada para controlar o laço de repetição
//let i = 1
//while (i<=10){
    //console.log(i);
   // i++//= i+1;
//}

//i = 0;
//while(i < listaDeFrutas.length){
    //console.log(listaDeFrutas[i]);
   // i++;
//}


//outra forma de fazer repetição de laço
//let i = 1;
//do{
//console.log(i);
//i++
//} while(i<=10);

//outro laço é for

for(let i = 1; i<=10; i++){
console.log(i);
}
//use o for é mais fácil e prático e curto!

for(let i = 0; i < listaDeFrutas.length; i++){
    console.log(listaDeFrutas[i]);
}

