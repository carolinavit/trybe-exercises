// 1 - Com base nessas informações, crie um algoritmo que retorne o fatorial de 10. 

let fatorial = 10;
let resultado= fatorial;

for (let index=1; index < fatorial; index += 1) {
    resultado *= index;
} 
console.log(resultado)


// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. 

let word = 'tryber';
let newString = ""

for(let index = word.length -1; index >= 0; index -= 1) {
    newString += word[index];
}
 console.log(newString);


// 3- Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. 

let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavraMaior;

for(let index= 0; index < array.length; index += 1){
    
}



// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.


