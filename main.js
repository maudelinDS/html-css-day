


console.log("Bonjour");

// (object)permet dacceder au dom
let toto = document.getElementById("grp4")
// (innerText) variable représente un élément dans le html

toto.addEventListener("click", function () {

    console.log("j'ai cliqué");

  let articles = document.getElementsByTagName("div")

  for (const article of articles) {
    article.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
});

let pp = document.getElementById("ii")
// (innerText) variable représente un élément dans le html

pp.addEventListener("input", function (e) {

    console.log("j'ai cliqué");

  let articles = document.getElementsByTagName("div")

  for (const article of articles) {
    article.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }

 console.log(e.target.value)

document.getElementsByTagName("h1")[0].innerText = e.target.value

});


//Grades average computing

// Display average

function displayAverage(avg, id) {
document.getElementById(id).innerText = avg
}

// Compute average
function average (gradesArray){
    let sum = 0
    for (const grade of gradesArray) {

        sum += grade
    }
    return sum / gradesArray.length
}

//Retrieve grades

function retrieveGrades(gradesID) {

    let grades = []

    for (const gradesIDElement of gradesID) {

grades.push (parseInt(document.getElementById(gradesIDElement).value))
    }
    return grades
}

//Register listener
let inputs = document.getElementsByTagName('input')

for (const input of inputs) {
    input.addEventListener('input',function (){

        displayAverage(average(retrieveGrades(['grade-1', 'grade-2'])),

            'average'

        )

    })
}


