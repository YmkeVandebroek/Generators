console.log("Hallo, console?");

/*De formule om een willekeurig getal te verkrijgen*/
function willekeurigGetal(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*Video's*/
let frame = document.getElementsByTagName("iframe")[0];
let video1 = "https://www.youtube.com/embed/NX5xIRUcPyI";
let video2 = "https://www.youtube.com/watch?v=-dn7FtPVvoA";
let video3 = "https://www.youtube.com/watch?v=TtDrVq4zH8Y";
let video4 = "https://www.youtube.com/watch?v=_oOQM0uYctM";

/*Video's waaruit gekozen kan worden*/
let mijnVideos = [video1, video2, video3, video4];

/*We nemen de button voor een mop en zetten hier een eventlistener op*/
let mijnKnop = document.getElementsByTagName("button")[0];
mijnKnop.addEventListener("click", kiesVideo);

/*We schrijven een functie die a.h.v. een willekeurig getal de video's kiest*/
function kiesVideo(){
  let getal = willekeurigGetal(0,3);
  frame.setAttribute("src", mijnVideos[getal]);
}
