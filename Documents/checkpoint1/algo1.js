//creer une boucle qui incremente i (le nombre e colonnes)
// creer une boucle qui incremente seatNumber 


function CreateArrayOfSeats() {
    let i;
    let seatNumber;
    let arrayContent;
    let myArray = [];
    for (i=1; i<=26; i++){
      for (seatNumber = 1; seatNumber <= 100; seatNumber++){
        arrayContent = i + "-" + seatNumber;
        myArray.push(arrayContent);
      }
    }
    return (myArray);
  }
  
  console.log(CreateArrayOfSeats())

