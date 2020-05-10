console.log("Hallo, console?");

/*De formule om een willekeurig getal te verkrijgen*/
function willekeurigGetal(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*We nemen eerst de paragraaf vast waar het woord in zal verschijnen*/
let mijnParagraaf = document.getElementsByTagName("p")[0];

/*Weetjes*/
let weetje1 = "Wist je dat -89,2 °C de laagste buitentemperatuur ooit gemeten is?";
let weetje2 = "Wist je dat als je een goudvis in een donkere kamer opsluit, hij wit wordt?";
let weetje3 = "Wist je dat Coca-Cola oorspronkelijk groen was?";
let weetje4 = "Wist je dat dat net zoals de vingerafdruk ook de tongafdruk bij ieder mens uniek is?";

/*De moppen waaruit gekozen kan worden*/
let mijnWeetjes = [weetje1, weetje2, weetje3, weetje4];

/*We nemen de button voor een mop en zetten hier een eventlistener op*/
let mijnKnop = document.getElementsByTagName("button")[0];
mijnKnop.addEventListener("click", wachten);
mijnKnop.addEventListener("click", stopGeluiden);

/*Geluid koppelen aan mop*/
let vertellen = document.getElementsByTagName("audio")[0];

/*Laadfunctie voor mop wordt getoond*/
let drum = document.getElementById("drum");
drum.classList.add("onzichtbaar");
let effecten = document.getElementsByTagName("audio")[2];

function wachten(){
  effecten.play();
  mijnParagraaf.innerHTML="";
  drum.classList.remove("onzichtbaar");
  mijnKnop.classList.add("onzichtbaar");
}

/*Functie voor afspelen mop na de laadfucntie*/
effecten.onended = function() {
  vertellen.play();
  drum.classList.add("onzichtbaar");
  let getal = willekeurigGetal(0,3);
  mijnParagraaf.innerHTML = mijnWeetjes[getal];
  mijnKnop.innerHTML = "Volgend weetje!";
    mijnKnop.classList.remove("onzichtbaar");
  if (mijnParagraaf.innerHTML===weetje1) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje1.mp3");
  } else if (mijnParagraaf.innerHTML===weetje2) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje2.mp3");
  } else if (mijnParagraaf.innerHTML===weetje3) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje3.mp3");
  } else if (mijnParagraaf.innerHTML===weetje4) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje4.mp3");
  }
}

/*Functie automatisch afspelen van ingestelde lach na mop.*/
let ahGeluid = document.getElementById("ah");

vertellen.onended = function() {
  ahGeluid.play();
};

/*Functie die ervoor zorgt dat de geluiden stoppen als op de knop "volgende mop" gedrukt wordt*/
function stopGeluiden(){
  vertellen.pause();
  ahGeluid.pause();
}
