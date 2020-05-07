console.log("Hallo, console?");

/*De formule om een willekeurig getal te verkrijgen*/
function willekeurigGetal(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*We nemen eerst de paragraaf vast waar het woord in zal verschijnen*/
let mijnParagraaf = document.getElementsByTagName("p")[0];

/*Moppen*/
let mop1 = "Te koop aangeboden: Citroën C4. Ideaal om aan een ontslagen werknemer te geven als afscheidsgeschenk.";
let mop2 = "Een interviewer interviewt een goochelaar. Zegt de interviewer wat is uw favoriete nummer? Zegt de goochelaar: Het doorgezaagde meisje. Zegt de interviewer: Heeft u ook kinderen? De goochelaar zegt: Ja, twee en een half.";
let mop3 = "Een Belg, en twee Engelsen krijgen een botsing. Zegt de Engelse: “I am sorry.” Zegt de 2e Engelse: “I am sorry too.” Zegt de Belg: “I am sorry 3.”";
let mop4 = "Het nieuws in België: Dit weekend zijn er zes mensen omgekomen in het verkeer. Drie door een auto-ongeluk en drie tijdens de reconstructie.";

/*De moppen waaruit gekozen kan worden*/
let mijnMoppen = [mop1, mop2, mop3, mop4];

/*We nemen de button voor een mop en zetten hier een eventlistener op*/
let mijnKnop = document.getElementsByTagName("button")[0];
mijnKnop.addEventListener("click", kiesLachGeluid);
mijnKnop.addEventListener("click", kiesVisueleLach);
mijnKnop.addEventListener("click", wachten);
mijnKnop.addEventListener("click", stopGeluiden);

/*Geluid koppelen aan mop*/
let vertellen = document.getElementsByTagName("audio")[0];

/*Random lachgeluiden*/
let lachGeluid = document.getElementById("lachgeluid");
let lach1 = "audio/Lach/lach1.mp3";
let lach2 = "audio/Lach/lach2.mp3";
let lach3 = "audio/Lach/lach3.mp3";
let lach4 = "audio/Lach/lach4.mp3";
let lach5 = "audio/Lach/lach5.mp3";

/*De lachen waaruit gekozen kan worden*/
let mijnLachGeluiden = [lach1, lach2, lach3, lach4, lach5];

/*Functie voor het kiezen van een random lach*/
function kiesLachGeluid(){
  let getal = willekeurigGetal(0,4);
  lachGeluid.setAttribute("src", mijnLachGeluiden[getal]);
}

/*Video lachen*/
let visueelLachen = document.getElementById("lachen");
visueelLachen.classList.add("onzichtbaar");

function kiesVisueleLach(){
  if (lachGeluid.getAttribute("src")===lach1) {
    visueelLachen.setAttribute("src", "video/lachen.gif")
  } else if (lachGeluid.getAttribute("src")===lach2) {
    visueelLachen.setAttribute("src", "video/lachen5.gif")
  } else if (lachGeluid.getAttribute("src")===lach3) {
    visueelLachen.setAttribute("src", "video/lachen4.gif")
  } else if (lachGeluid.getAttribute("src")===lach4) {
    visueelLachen.setAttribute("src", "video/lachen3.gif")
  } else if (lachGeluid.getAttribute("src")===lach5) {
    visueelLachen.setAttribute("src", "video/lachen2.gif")
  }
}

/*Laadfunctie voor mop wordt getoond*/
let drum = document.getElementById("drum");
drum.classList.add("onzichtbaar");
let effecten = document.getElementsByTagName("audio")[2];

function wachten(){
  effecten.play();
  mijnParagraaf.innerHTML="";
  drum.classList.remove("onzichtbaar");
  visueelLachen.classList.add("onzichtbaar");
  mijnKnop.classList.remove("pinken");
  mijnKnop.classList.add("onzichtbaar");
}

/*We schrijven een functie die a.h.v. een willekeurig getal de moppen kiest*/
effecten.onended = function() {
  vertellen.play();
  if (mijnParagraaf.innerHTML===mop1) {
    vertellen.setAttribute("src", "audio/Moppen/mop1.mp3");
  } else if (mijnParagraaf.innerHTML===mop2) {
    vertellen.setAttribute("src", "audio/Moppen/mop2.mp3");
  } else if (mijnParagraaf.innerHTML===mop3) {
    vertellen.setAttribute("src", "audio/Moppen/mop3.mp3");
  } else if (mijnParagraaf.innerHTML===mop4) {
    vertellen.setAttribute("src", "audio/Moppen/mop4.mp3");
  }
}

/*Functie voor afspelen mop na de laadfucntie*/
effecten.onended = function() {
  vertellen.play();
  drum.classList.add("onzichtbaar");
  let getal = willekeurigGetal(0,3);
  mijnParagraaf.innerHTML = mijnMoppen[getal];
  mijnKnop.innerHTML = "Volgende mop!";
    mijnKnop.classList.remove("onzichtbaar");
  if (mijnParagraaf.innerHTML===mop1) {
    vertellen.setAttribute("src", "audio/Moppen/mop1.mp3");
  } else if (mijnParagraaf.innerHTML===mop2) {
    vertellen.setAttribute("src", "audio/Moppen/mop2.mp3");
  } else if (mijnParagraaf.innerHTML===mop3) {
    vertellen.setAttribute("src", "audio/Moppen/mop3.mp3");
  } else if (mijnParagraaf.innerHTML===mop4) {
    vertellen.setAttribute("src", "audio/Moppen/mop4.mp3");
  }
}

/*Functie automatisch afspelen van ingestelde lach na mop.*/
vertellen.onended = function() {
  lachGeluid.play();
  visueelLachen.classList.remove("onzichtbaar");
  mijnKnop.classList.add("pinken");
};

/*Functie die ervoor zorgt dat de geluiden stoppen als op de knop "volgende mop" gedrukt wordt*/
function stopGeluiden(){
  lachGeluid.pause();
  vertellen.pause();
}
