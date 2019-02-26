//declare function
function fctHello(){
    //get content of input inName
    var name = document.getElementById("inName");
    var strToshow = 'Hello World';
    if (name.value) { strToshow += " " + name.value;}

    strToshow += " !";

    alert(strToshow);
}

document.addEventListener("DOMContentLoaded", function(event){
    console.log("DOM loaded");
    
    //add event to button
    var btHello = document.getElementById("btHello");
    btHello.addEventListener("click", fctHello);
});