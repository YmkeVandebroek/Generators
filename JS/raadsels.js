console.log("Hallo, console?");

/*De formule om een willekeurig getal te verkrijgen*/
function willekeurigGetal(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*We nemen eerst de paragraaf vast waar het raadsel in zal verschijnen*/
let mijnParagraaf = document.getElementsByTagName("p")[0];

/*Raadsels*/
let raadsel1 = "Wat is het toppunt van nieuwsgierigheid?";
let raadsel2 = "Weet je waarom een politie agent altijd gelijk denkt te hebben?";
let raadsel3 = "Waarom staat een Belg maandag altijd naast zijn stoel?";
let raadsel4 = "Waarom neemt een Belg altijd een liniaal mee naar bed?";

/*Antwoorden*/
let antwoord1 = "Door het sleutelgat kijken van een glazen deur.";
let antwoord2 = "De aanhouder wint!";
let antwoord3 = "Omdat het weekend erop zit!";
let antwoord4 = "Dan kan hij ‘s morgens meten hoe lang hij geslapen heeft.";

/*De raadsels waaruit gekozen kan worden*/
let mijnRaadsels = [raadsel1, raadsel2, raadsel3, raadsel4];

/*We nemen de button voor een raadsel en zetten hier een eventlistener op*/
let mijnKnop = document.getElementsByTagName("button")[0];
let mijnKnop2 = document.getElementsByTagName("button")[1];
mijnKnop2.classList.add("onzichtbaar");

mijnKnop.addEventListener("click", kiesRaadsel);
mijnKnop.addEventListener("click", vertelRaadsel);
mijnKnop2.addEventListener("click", toonAntwoord);

/*Geluid koppelen aan raadsel*/
let vertellen = document.getElementsByTagName("audio")[0];
let vertellen2 = document.getElementsByTagName("audio")[1];
let vertellen3 = document.getElementsByTagName("audio")[2];
let vertellen4 = document.getElementsByTagName("audio")[3];

/*We schrijven een functie die a.h.v. een willekeurig getal de mraadsels kiest*/
function kiesRaadsel(){
  let getal = willekeurigGetal(0,3);
  mijnParagraaf.innerHTML = mijnRaadsels[getal];
  mijnKnop.innerHTML = "Volgend raadsel!";
}

/*Functie voor afspelen raadsel*/
function vertelRaadsel(){
  mijnKnop.classList.add("onzichtbaar");
  vertellen.play();
  if (mijnParagraaf.innerHTML===raadsel1) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel1.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel2) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel2.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel3) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel3.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel4) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel4.mp3");
  }
    antwoordGebruikerVeld.classList.add("onzichtbaar");
    antwoordGebruikerVeld.classList.remove("fout");
    antwoordGebruikerVeld.classList.remove("juist");
    vertellen4.pause();
}

/*De tweede knop wordt onzichtbaar na het vertellen van het raadsel, er verschijnt een klok en er is wachtmuziek, het inputveld verschijnt....*/
let klok = document.getElementById("klok");
klok.classList.add("onzichtbaar");

vertellen.onended = function() {
  mijnKnop2.classList.remove("onzichtbaar");
  vertellen2.setAttribute("src", "audio/Effecten/wachtmuziek.mp3");
  vertellen2.play();
  klok.classList.remove("onzichtbaar");
  infoVulIn.classList.remove("onzichtbaar");
  inputGebruiker.classList.remove("onzichtbaar");
};

/*Deze functie vertelt het antwoord, toont het juiste antwoord en toont het antwoord van de gebruiker*/
let antwoordGebruikerVeld = document.getElementById("antwoordGebruikerVeld");
antwoordGebruikerVeld.classList.add("onzichtbaar");
let infoVulIn = document.getElementById("infoVulIn");
infoVulIn.classList.add("onzichtbaar");
let inputGebruiker = document.getElementsByTagName("input")[0];
inputGebruiker.classList.add("onzichtbaar");

function toonAntwoord(){
  mijnKnop2.classList.add("onzichtbaar");
  vertellen2.pause();
  if (mijnParagraaf.innerHTML===raadsel1) {
    mijnParagraaf.innerHTML=antwoord1;
    vertellen3.setAttribute("src", "audio/Raadsels/antwoord1.mp3");
      if (inputGebruiker.value.includes("sleutelgat" && "glazen" && "deur")) {
        antwoordGebruikerVeld.classList.add("juist");
      } else {
        antwoordGebruikerVeld.classList.add("fout");
      }
  } else if (mijnParagraaf.innerHTML===raadsel2) {
    mijnParagraaf.innerHTML=antwoord2;
    vertellen3.setAttribute("src", "audio/Raadsels/antwoord2.mp3");
      if (inputGebruiker.value.includes("aanhouder" && "wint")) {
        antwoordGebruikerVeld.classList.add("juist");
      } else {
        antwoordGebruikerVeld.classList.add("fout");
      }
  } else if (mijnParagraaf.innerHTML===raadsel3) {
    mijnParagraaf.innerHTML=antwoord3;
    vertellen3.setAttribute("src", "audio/Raadsels/antwoord3.mp3");
      if (inputGebruiker.value.includes("weekend" && "zit")) {
        antwoordGebruikerVeld.classList.add("juist");
      } else {
        antwoordGebruikerVeld.classList.add("fout");
      }
  } else if (mijnParagraaf.innerHTML===raadsel4) {
    mijnParagraaf.innerHTML=antwoord4;
    vertellen3.setAttribute("src", "audio/Raadsels/antwoord4.mp3");
      if (inputGebruiker.value.includes("meten" && "geslapen")) {
        antwoordGebruikerVeld.classList.add("juist");
      } else if (inputGebruiker.value.includes("meten" && "slaap")){
        antwoordGebruikerVeld.classList.add("juist");
      } else {
        antwoordGebruikerVeld.classList.add("fout");
      }
  }
  vertellen3.play();
  klok.classList.add("onzichtbaar");
  antwoordGebruikerVeld.innerHTML="Jouw antwoord: " + inputGebruiker.value;
  inputGebruiker.value="";
  infoVulIn.classList.add("onzichtbaar");
  inputGebruiker.classList.add("onzichtbaar");
  antwoordGebruikerVeld.classList.remove("onzichtbaar");
}

/*Functie die juist of fout geluidseffect afspeelt*/
vertellen3.onended = function() {
  mijnKnop.classList.remove("onzichtbaar");
  if (antwoordGebruikerVeld.classList.contains("juist")) {
    vertellen4.setAttribute("src", "audio/Effecten/juist.mp3")
  } else {
    vertellen4.setAttribute("src", "audio/Effecten/fout.mp3")
  }
  vertellen4.play();
}
