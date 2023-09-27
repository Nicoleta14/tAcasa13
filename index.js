// ***********************Tema pentru acasa - cursul 13 ****************************
// ex 1 ----------------------------------------------------------

const ziuaSaptamanii = "joi";

switch (ziuaSaptamanii) {
  case "luni":
    console.log("Astazi este luni!");
    break;
  case "marti":
    console.log("Astazi este marti!");
    break;
  case "miercuri":
    console.log("Astazi este miercuri!");
    break;
  case "joi":
    console.log("Astazi este joi!");
    break;
  case "vineri":
    console.log("Astazi este vineri!");
    break;
  case "sambata":
    console.log("Astazi este sambata!");
    break;
  case "duminica":
    console.log("Astazi este duminica!");
    break;
  default:
    console.log("Nu este o zi a saptamanii.");
}

// ex 2 ----------------------------------------------------------------
var str = "Nicoleta";
var lungimeaStr = str.length;

if (lungimeaStr > 10) {
  console.log("Lungimea str este mai mare de 10.");
} else {
  console.log("Lungimea str este mai mică decat 10.");
}

// ex 3 -----------------------------------------------------------------
var variabila = 'NICOLETA'
console.log(variabila.toLowerCase())

var variabila = 'nicoleta'
console.log(variabila.toUpperCase())

// ex 4 -----------------------------------------------------------------

//1 metoda
var str = "Imi place cursul de frontend";
var str1 = str.split(" ");
var alTreileaCuvant = str1[3];
console.log("Al treilea cuvânt este:", alTreileaCuvant);

//2 metoda
var str = "Imi place cursul de frontend";
var str1 = str.split(" ");
var alTreileaCuvant = str1.splice(3,1); 
console.log("Al treilea cuvânt este:", alTreileaCuvant);