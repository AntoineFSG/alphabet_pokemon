function shuffle(){

var nom = ['Arko','Bradibou','Cosmog','Darkrai','Evoli','Feunnec','Germignon','Hippodocus','Iguolta','Judocrack','Kabuto','Lunala','Macogneur','N\351crosma','Otaquin','Picachu','Qulbutoquet','Rocaillou','Sorb\351b\351','Tutafeh','Ursaring','Vip\351lierre','Wattouat','Xatu','Yveltal','Zygarde'];
var randomNumber = Math.floor(Math.random() * 26);
var randomNom = nom[randomNumber];
  
var str = `<div class='flex-ul'> 
                    <div class='flip-container'>
                        <div class='card' id='${randomNom}'>
                            <div class='front face'>
                                <div class='full-face'>
                                    <div>
                                        <img src='img/front/${randomNom.charAt(0)}.jpg'>
                                    </div>
                                </div>
                            </div>
                            <div class='back face' id='back'>
                                <div class='left-side'>
                                    <p class='emphase-letter'>${randomNom}</p>
                                </div>
                                <div class='img-container'>
                                    <img class='liste-img' src='img/back/${randomNom.charAt(0)}.jpg'>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>`;


console.log(randomNom);


document.getElementById("listeLettres").innerHTML = str;

let card = document.querySelectorAll('.card');


card.forEach(function(cards) {
  cards.addEventListener("click", () => {
    cards.classList.toggle("isflipped");
  });
cards.removeEventListener("click",cards);
});
};





