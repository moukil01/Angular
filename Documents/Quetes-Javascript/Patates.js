

let  Question =  prompt("Hey mon amis !  tu aimes ça les patates ?");

switch (Question){

case "oui":

	let ligne = "";

  for (let i = 1 ; i <= 7; i++){
  	ligne = ligne + "#"
  	console.log(ligne);
  }
  	break;


 case "non":
	alert("Je suis deçu :(");
	break;

default:
	alert ("Je vous sens comme tiraillé");

}
