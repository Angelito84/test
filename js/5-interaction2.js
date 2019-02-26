//declare function
function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("bulbon")) {
    image.src = "images/pic_bulboff.gif";
  } else {
    image.src = "images/pic_bulbon.gif";
  }
}

document.addEventListener("DOMContentLoaded", function(event){
    console.log("DOM loaded");
    
    //add event to button
    var btHello = document.getElementById("btSwitch");
    btHello.addEventListener("click", changeImage);
});