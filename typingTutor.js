var defaultPhrases = ["The quick brown fox jumps over the lazy dog", "Jinxed wizards pluck ivy from the big quilt", "Crazy Fredrick bought many very exquisite opal jewels"];
var chosenPhrase = "The quick brown fox jumps over the lazy dog";
var interval = setInterval("checkInputBox()", 100);
var activated = false;
var resultsActivated = false;
var timer = 0;
var numCorrect = 0;
var userText = "";

function newPhrase(){
  var random = Math.random();
  chosenPhrase = defaultPhrases[Math.round(Math.random()*(defaultPhrases.length-1))];
  document.getElementById("typingPhrase").innerHTML = chosenPhrase;
  document.getElementById("textField").value = "";
  timer = 0;
  document.getElementById("WPM").innerHTML = "WPM: 0";
  document.getElementById("Correctness").innerHTML = "Percent Correct: 0";
  document.getElementById("TimeSpent").innerHTML = "Timer: 0";
  resultsActivated = false;
}

function checkInputBox() {
  if (document.getElementById("textField").value != ""){
    activated = true;
  }
  if(document.getElementById("textField").value.length >= chosenPhrase.length){
    activated = false;
    if(!resultsActivated){
      displayResults();
    }
  }
  if (activated){
    timer += 0.1;
  }
}

function displayResults(){
  resultsActivated = true;
  userText = document.getElementById("textField").value;
  document.getElementById("TimeSpent").innerHTML = "Timer: " + timer;
  for (var i = 0; i < chosenPhrase.length; i++) {
    if (chosenPhrase.substring(i, i+1).equals(userText.substring(i, i+1))) {
      numCorrect += 1;
    }
  }
  alert("" + numCorrect);
  document.getElementById("Correctness").innerHTML = "Percent Correct: " + numCorrect/chosenPhrase.length;
  document.getElementById("WPM").innerHTML = "WPM: " + chosenPhrase.length/timer;
}
