var reponseEnCours;
var Demo = document.getElementById("demo");
var Indice = document.getElementById("indice");
var Voiture = document.getElementById("voiture");
var Jouer = document.getElementById("jouer");
var entreUtilisateur = document.getElementById("partie");
var titre = document.getElementById("titre");
var choixC;
var data = [
  ['images/image1.jpg', 18000],
  ['images/image2.jpg', 14430],
  ['images/image3.jpg',23950],
  ['images/image4.jpg', 138950],
  ['images/image5.jpg', 80440],
  ['images/cosme1.jpg', 33],
  ['images/cosme2.jpg', 19],
  ['images/cosme3.jpg', 7],
  ['images/cosme4.jpg', 10],
  ['images/cosme5.jpg', 64],
  ['images/hight1.jpg',809],
  ['images/hight2.jpg', 329],
  ['images/hight3.jpg',809],
  ['images/hight4.jpg', 429],
  ['images/hight5.jpg', 29]
];

var indiceEnCours = null;

function choixCategorie(choixC) {


  if(choixC == "catVoiture") {
  //alert("tu as choisi la categorie voiture");
}

  else if (choixC == "catCosmetique") {
  //alert("tu as choisi la categorie catCosmetique");

  }

  else {
  //alert("tu as choisi la categorie hightech");
  }

  genereIndice(choixC);

}




function AfficheInput() {
entreUtilisateur.style.visibility = "visible";
}



function genereIndice(choixC) {
  Jouer.innerText = "JOUER";
  Demo.innerText = "";
  Indice.innerText = "";
  var i;

  if(choixC == "catVoiture") {
  i = Math.round(Math.random()*4);
  }

  else if (choixC == "catCosmetique") {
    i = Math.round(Math.random()*4)+5;
  }
  else {
    i = Math.round(Math.random()*4)+10;
  }
 indiceEnCours = i;

 refreshImage();
}

function refreshImage()
{
  if(indiceEnCours == null)
    var path = 'image_accueil_par_defaut.png';
  else
    var path =  data[indiceEnCours][0];

  Voiture.src = path;
}

function jouer() {
  AfficheInput();
  document.querySelector('#chrono h2').innerHTML = "";
  document.querySelector('button#jouer').disabled = true;
  chrono();
}

function testResult(){
  refreshImage();
   userReponse = document.getElementById("numb").value;
   if (isNaN(userReponse)) {
       Demo.innerText = "Veuillez saisir un nombre svp";
   }
   else if(indiceEnCours == null) {
     Demo.innerText = "Pas de produit choisi, vous avez bien choisi une catégorie?";
   }
   else {
        var reponseEnCours = data[indiceEnCours][1];
        console.log(reponseEnCours);
       if(userReponse < reponseEnCours)
         Indice.innerText = "C'est plus !";
       else if(userReponse > reponseEnCours)
         Indice.innerText = "C'est moins !"
       else {
           Indice.innerText = "C'est ça !";
           Jouer.innerText = "REJOUER ?";
           document.querySelector('button#jouer').disabled = false;

            }
          }
}
