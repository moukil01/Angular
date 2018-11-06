var prenom = "loic";
var age = "27";
var adresse = "chato9";
var identite = "\n<html>\n    <body>\n        " + prenom + "\n        " + age + " ans\n        " + adresse + "\n    </body>\n</hmtl>\n";
console.log(identite);
function getMyId() {
    return "\n     prenom: Loic\n    age: 27 ans\n    adresse: chato9";
}
var result = getMyId();
console.log(result);
