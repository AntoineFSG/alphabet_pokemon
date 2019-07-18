
//var lettre = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var nom = ['Arko','Bradibou','Cosmog','Darkrai','Evoli','Feunnec','Germignon','Hippodocus','Iguolta','Judocrack','Kabuto','Lunala','Macogneur','N\351crosma','Otaquin','Picachu','Qulbutoquet','Rocaillou','Sorb\351b\351','Tutafeh','Ursaring','Vip\351lierre','Wattouat','Xatu','Yveltal','Zygarde'];
var str = "<div class='flex-ul'>";


nom.forEach(function(noms) {
  str +="<div class='flip-container'>";
  str +="<div class='card' id='"+ noms +"''>";
  str +="<div class='front face'>";
  str +="<div class='left-side'><p class='big'>"+ noms.charAt(0) +"</p></div>";
  str +="<div class='img-container'><img src='img/front/"+ noms.charAt(0) +".jpg'></div>";
  str +="</div>";
  str +="<div class='back face' id='back'>";
  str +="<div class='left-side'><p>"+ noms +"</p></div>";
  str +="<div class='img-container'><img class='liste-img' src='img/back/"+ noms.charAt(0) +".jpg'></div>";
  str += "</div></div></div>"

});

str += '</div>';

document.getElementById("listeLettres").innerHTML = str;


let card = document.querySelectorAll('.card');


card.forEach(function(cards) {
  cards.addEventListener("click", () => {
    cards.classList.toggle("isflipped");
  });
  cards.removeEventListener("click",cards);
});






