//1) Ecrire une fonction qui compte le nombre de personnes mineures dans un tableau d’entiers. Le tableau contient les âges des personnes.
//2) Ecrire une function qui teste la fonction précédente


console.log("Hello World!!");

// definir un nombre de personne = entier 
// equivalent a a la taille du tableau 
//ce tableau contient un age par personne
// Variable de stockage 
// Ecrire une fonction qui ajoute +1 a la variable de stockage SI la personne a un age de moins de 18 ans



function nbPersMineures (array){
	// declaration de la variable personne	
	let personne = 0;
	// pour chaque element au sein du tableau passe en parametre	
	for (let i =0; i< array.length; i ++){
		// si l'element < 18 : incrementer personne d'une unite		
		if (array[i] < 18) {
			personne = personne + 1;
		}
 
	} 
	// sortie de la boucle ...
	// on retourne le nb de personnes
	return personne;
}

function test()
{

	let resultat = nbPersMineures([45, 57, 86, 14, 2, 97, 8, 21]);
	if( resultat === 3 )
	{
		console.log( "Loic fonctionne" );
	}

	// version raccourcie
	console.log( nbPersMineures([45, 57, 86, 14, 2, 97, 8, 21]) === 3 );

}

test();







