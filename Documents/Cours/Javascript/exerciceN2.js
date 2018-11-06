let count = 0;

for (let i=0; i<=100; i = i +5){ /*declaration de la variable ; i et superieur ou egal a 100 et apres tu fait les pas de 5 */
    console.log(i);
    count = count + i;
}
console.log(count);


/* 3 eme exercice a faire tourner dans le navigateur */


let number1 = prompt("Entrer un nombre:");
let operator =prompt("Entrer un operateur:");
let number2 = prompt("Entrez un autre nombre :");


number1 = parseInt(number1);
number2 = parseInt(number2);
let resultat;

switch(operator){
    case("+"): result =number1 + number2; break;
    case("-"): result = number1 -number2; break;
    case("/"):if (number2 !=0) result = number1 / number2; break;
    case("*"): result = number1 * number2; break;
    case("%"): result = number1 % number2; break;

}
alert(result);