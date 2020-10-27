var defaultPhrases = ["The quick brown fox jumps over the lazy dog", "Jinxed wizards pluck ivy from the big quilt", "Crazy Fredrick bought many very exquisite opal jewels"];
var chosenPhrase = "The quick brown fox jumps over the lazy dog";
var interval = setInterval("checkInputBox()", 100);
var activated = false;
var timer = 0;
function newPhrase(){
  var random = Math.random();
  chosenPhrase = defaultPhrases[Math.round(Math.random()*(defaultPhrases.length-1))];
  document.getElementById("typingPhrase").innerHTML = chosenPhrase;
}

function checkInputBox() {
  if (document.getElementById("textField").value != ""){
    activated = true;
  }
  if(document.getElementById("textField").value.length == chosenPhrase.length){
    activated = false;
  }
  if (activated){
    timer += 0.1;
  }
}
