//declare function
function envoyer() {
  checksexe();
}

function checksexe() {
  var image = document.getElementById('sexe');
  if (image.src.match("bulbon")) {
    image.src = "images/pic_bulboff.gif";
  } else {
    image.src = "images/pic_bulbon.gif";
  }
}