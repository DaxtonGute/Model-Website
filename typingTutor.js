var defaultPhrases = ["waltz, bad nymph, for quick jigs vex", "quick zephyrs blow, vexing daft jim", "sphinx of black quartz, judge my vow", "two driven jocks help fax my big quiz", "five quacking zephyrs jolt my wax bed", "the five boxing wizards jump quickly", "pack my box with five dozen liquor jugs", "the quick brown fox jumps over the lazy dog", "jinxed wizards pluck ivy from the big quilt", "crazy fredrick bought many very exquisite opal jewels", "we promptly judged antique ivory buckles for the next prize", "a mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent", "jaded zombies acted quaintly but kept driving their oxen forward", "the job requires extra pluck and zeal from every young wage earned"];
var chosenPhrase = "the quick brown fox jumps over the lazy dog";
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
  numCorrect = 0;
}

function checkInputBox() {
  if (document.getElementById("textField").value != ""){
    activated = true;
  }
  if(document.getElementById("textField").value.length >= chosenPhrase.length){
    activated = false;
    if(!resultsActivated){
      displayTypingResults();
    }
  }
  if (activated){
    timer += 0.1;
  }
}

function displayTypingResults(){
  resultsActivated = true;
  userText = document.getElementById("textField").value;
  document.getElementById("TimeSpent").innerHTML = "Timer: " + timer;
  for (var i = 0; i < chosenPhrase.length; i++) {
    if (chosenPhrase.charAt(i) == userText.charAt(i)) {
      numCorrect += 1;
    }
  }
  document.getElementById("Correctness").innerHTML = "Percent Correct: " + (numCorrect/chosenPhrase.length)*100 + "%";
  //5char per word, 60 sec per min
  document.getElementById("WPM").innerHTML = "WPM: " + (chosenPhrase.length/5)/(timer/60);
}
