// 1 - Demander un mode de calcul

do {
  operateur = prompt(
    "Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n\n"
  );
  if (operateur > 4 || operateur == 0) {
    alert("Erreur : Veuillez rentrer un nombre entre 1 et 4");
  }
} while (
  operateur == "" ||
  operateur == null ||
  operateur > 4 ||
  operateur == 0
);
console.log("opérateur : " + operateur);

// 2 - Demander 2 nombres
do {
  premierNombre = Number(prompt("Entrez votre premier nombre"));
  deuxiemeNombre = Number(prompt("Entrez votre deuxième nombre"));
  // On peut aussi utiliser parseInt
  if (isNaN(premierNombre) || isNaN(deuxiemeNombre)) {
    alert("Veuillez rentrer un nombre valide dans les champs");
  }
} while (
  premierNombre == "" ||
  premierNombre == null ||
  isNaN(premierNombre) ||
  deuxiemeNombre == "" ||
  deuxiemeNombre == null ||
  isNaN(deuxiemeNombre)
);

console.log("premierNombre : " + premierNombre);
console.log("deuxiemeNombre : " + deuxiemeNombre);

// 3 - Création des 4 fonctions
let result;

function addition(nombreA, nombreB) {
  return nombreA + nombreB;
}

function multiplication(nombreA, nombreB) {
  return nombreA * nombreB;
}

function soustraction(nombreA, nombreB) {
  return nombreA - nombreB;
}

function division(nombreA, nombreB) {
  if (nombreB === 0) {
    return "Division par 0 impossible";
  }

  return nombreA / nombreB;
}

// 4 - Appel de la bonne fonction

let resultat;

switch (operateur) {
  case "1":
    resultat = addition(premierNombre, deuxiemeNombre);
    break;

  case "2":
    resultat = multiplication(premierNombre, deuxiemeNombre);
    break;

  case "3":
    resultat = soustraction(premierNombre, deuxiemeNombre);
    break;

  case "4":
    resultat = division(premierNombre, deuxiemeNombre);
    break;

  default:
    alert("Opérateur invalide !");
}

alert(resultat);
