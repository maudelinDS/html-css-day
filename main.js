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
