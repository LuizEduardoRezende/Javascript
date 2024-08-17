// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções


let lines = gets().split("\n");
 
var numberOfMatches = parseInt(lines.shift);
 
let n = parseInt(lines.shift());
let totalMatches = 0;
    while(n>1){
        if(n % 2 == 0){
          totalMatches += n/2;
          n = n/2;
          
        }else{
          totalMatches += (n-1)/2;
          n = ((n-1)/2) + 1;
        }
    }

print(totalMatches);
//Escreva o seu código nos espaços em branco