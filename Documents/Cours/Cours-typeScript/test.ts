let prenom: string = "loic";
let age : string = "27";
let adresse: string = "chato9";

let identite: string = `
<html>
    <body>
        ${prenom}
        ${age} ans
        ${adresse}
    </body>
</hmtl>
`;
console.log(identite);
 function getMyId():string{
     return `
     prenom: Loic
    age: 27 ans
    adresse: chato9`;
  }
  let result:string = getMyId();
  console.log(result);


