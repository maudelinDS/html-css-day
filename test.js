console.log();

var toto = 0;

var tutu = ["titi", [48, toto, false]];

// var ne s'utilise plus on l'a remplacer par let
let x = 5;
//variable avec une valeur qu'on ne peut plus modifier une fois déclarer
const t = "tutu";
// est un type de variable dans laquelle on va pouvoir y placer des objects précédéments défini
let o = {
  toto: false,
  titi: [50, 60],
  tutu: 80,
  // à lintérieur d'un objet, on peut y placer des autres objets
  clothing: {
    top: "jacket",
    botom: "Jeans",
  },
};


let c = 5;

let ta = [4, 3, 5]

let nn = [6, 3, 2]

let avg_ta = average(ta)
let avg_nn = average(ta)

// créer une fucntion 

function average(tableau) {
  let total = 0;

  for (const note of tableau) {
    total += note
  }
  return total / tableau.length 
}

console.log( average(ta));
console.log( average(nn));


function pass(avg)
{ 

    if (avg > 6){
        console.log("tricheur");
        return
    }
if(avg < 4){
    console.log("Bravo");
}
else{
    console.log("Echec");
}
}

pass(average(ta))
pass(average(nn))