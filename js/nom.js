function shuffle(){

var nom = ['Arko','Bradibou','Cosmog','Darkrai','Evoli','Feunnec','Germignon','Hippodocus','Iguolta','Judocrack','Kabuto','Lunala','Macogneur','N\351crosma','Otaquin','Picachu','Qulbutoquet','Rocaillou','Sorb\351b\351','Tutafeh','Ursaring','Vip\351lierre','Wattouat','Xatu','Yveltal','Zygarde'];

var str = "<div class='flex-ul'>";

var randomNumber = Math.floor(Math.random() * 26);
var randomNom = nom[randomNumber];

console.log(randomNom);

  str +="<div class='flip-container'>";
  str +="<div class='card' id='"+ randomNom +"''>";
  str +="<div class='front face'>";
  str +="<div class='full-face'><p>"+ randomNom +"</p></div>";
  str +="</div>";
  str +="<div class='back face' id='back'>";
  str +="<div class='left-side'><p class='big'>"+ randomNom.charAt(0) +"</p></div>";
  str +="<div class='img-container'><img class='liste-img' src='img/back/"+ randomNom.charAt(0) +".jpg'></div>";
  str += "</div></div></div>"
  str += '</div>';


document.getElementById("listeLettres").innerHTML = str;

let card = document.querySelectorAll('.card');


card.forEach(function(cards) {
  cards.addEventListener("click", () => {
    cards.classList.toggle("isflipped");
  });
cards.removeEventListener("click",cards);
});
};

shuffle();




