let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*console.log(numbers); 

let soma= 0;

for (let index=0; index < numbers.length; index += 1) {
    soma += numbers[index] / 2;
}

console.log(soma) 

let soma= 0;

for (let index=0; index < numbers.length; index += 1) {
    soma += numbers[index] / 2;
} 
    if (soma > 20) {
        console.log("valor maior que 20")
    } else {
        console.log("Valor menor ou igual a 20")
    }

   
   
    let numeroMaior=0;

    for (let index=0; index < numbers.length; index += 1) {
        if (numbers[index] > numeroMaior) {
            numeroMaior = numbers[index];
        }
    }
    console.log(numeroMaior); */


    let cont=0;

    for (let index = 0; index < numbers.length; index += 1) 
    
        if ((index % 2) !== 0) {
            cont += 1;
        } else {
            console.log("Nenhum valor ímpar encontrado.")
        }
    

        console.log(cont);
