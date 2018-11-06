/* ------ COURS SUR LES VARAIBLES ------*/


alert("Ceci est du javascript"); /* une alert*/

let demo = 23; /* variable de type nombre=number*/

let string = "Ceci est une chaine de caractère"; /* variable avec chaine de caractère*/
let homme = true; /* une booleens response vrai*/
const NameEcole = "Wild Code School" /* une constante */

/* ---- typeof POUR Connaitre le type de ta variable ---- */

console.log(typeof string); /* affiche le type de la variable nommé string*/

console.log(typeof homme); /* affiche le type de la varaible nommé homme*/

console.log(typeof NameEcole); /* affiche le type de la varaible nommé NameEcole*/

console.log(string); /* affiche  la varaible nommé string*/

console.log(homme); /* affiche  la varaible nommé homme*/

console.log(NameEcole); /* affiche  la varaible nommé NameEcole*/

/* -------- Les CONDITIONS IF et ELSE ------ */

let marc = 18;


if (marc >= 18){

	console.log("Tu est majeur !");
}else{
	console.log("Tu n'est pas majeur");
}

let nombre = (prompt("Entrez un nombre: ")); /* l'utilisateur entre un nombre */

if(nombre > 0){ /* le nombre doit etre superieur a 0*/

	console.log(nombre + " est positif ou nul") /* si il est superieur alors tu affiche le nombre 
	cas entrer l'utilisateur + la phrase est positif ou nul*/

}else { /* sinon  si le chiffre est inférieur a 0 tu affiche le nombre + est négatif */
	if (nombre < 0){
		console.log(nombre + " est negatif");
	}else {
		console.log( nombre + " est nul "); /* sinon tu affiche le nombre + la phrase "est nul" */
	}
}

/* ------ CONDITIONS ET  ---- */

if ((nombre >=0 ) && (nombre <=100)){  /*si ton nombre est compris ente (0 ET &&) 100 */
	console.log(nombre + " est compris en 0 et 100"); /* Affiche le nombre entre puis la phrase est compris en 0 et 100 */
}else{ /* sinon */
	console.log(nombre + " n'est pas compris en 0 et 100") /* affiche le nombre et la phrase n'est pas compris en 0 et 100 */
}
 
/* ----- Condition OU ----- */

if ((nombre < 0) || (nombre > 100)) { /* si le nombre entrer pas le user et inferieur a 0 (OU ||) superieur a 100 */
	console.log (nombre + " est en dehors de l'intervalle [0, 100]"); /* tu affiche e nombre enter et la phrase est en dehors de l'intervalle */ 
}

/* ----- Conditon NON ou different de ----- */
if (!(nombre > 100)) {
	console.log(nombre + " est inferieur ou egale a 100");
}

/*------------------------------------------ */

/* ----------- Plusieur Instriciton avec SWITCH / CASE / BREAK ----- */

let meteo  =  prompt("Quel temps fait- il dehors ?");
switch (meteo){
case "soleil":
	alert("sortez en short");
	break;
case "vent":
	console.log("met un pull sa caille");
	break;
case "pluie":
	alert("met un manteau il flotte !!");
	console.log("met un manteau il flotte !!")
	break;
case "neige":
	console.log("met une doudoune sa caille venere !!")
	alert("met une doudoune sa caille venere !!");
	break;
default:
	console.log ("je n'ai pas bien compris =(")
	alert ("je n'ai pas bien compris =(");
}

/* ----------------------------------------------------------- */


/* -------- La Boucle WHILE ---------------- */ 

console.log("Debut boucle WHILE");
let Nb = 1;

 while (Nb <= 5){ /* tant que Nb est inferieur ou égale a 5 sa passe dans boucle*/

 	console.log(Nb); /* affiche le nombre que vos Nb*/

 	Nb ++; /* on rajoute +1 ( Nb++ et égale a Nb = Nb +1 c'est juste un raccourcis) a Nb jusqu'a ce que Nb vos plus de 5  et sortir de la boucle */
 }
 console.log("fin de boucle WHILE");

 /* --------------------------------------------- */ 

 /* ---------lA Boucle FOR -------------------- */ 
console.log("Debu boucle FOR");
 let  compteur;
 for (compteur = 1; compteur<= 5; compteur ++  ){
 	console.log(compteur);
 }
 console.log("Fin de boucle FOR");

 let ligne = "";
  for(let i =1 ; i <= 6; i++){
  	ligne = ligne + "#"
  	console.log(ligne);
  }

/* -----------------------------------------------*/

/* ---------Les FONCTIONS-----------------*/
function direBonjour(prenom){
	let message = "Bonjour," + prenom + "!" ; 
	return message;
}
console.log(direBonjour ("Loïc"));
console.log(direBonjour("Kevin"));
