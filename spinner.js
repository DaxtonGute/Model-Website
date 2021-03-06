//spinner
var timer = 10;
var colors = [];
var originalColors = [];
var text = []
var originalText = [];
var pickedColor = "";
var intervalOne;
var intervalTwo;
var intervalThree;
function doTheSpin(){
  if (colors.length == 0){
    if(document.getElementById("danger-button").classList.contains("active")){
      colors.push("danger");
      originalColors.push("danger");
      text.push("danger");
      originalText.push("danger");
    }
    if(document.getElementById("warning-button").classList.contains("active")){
      colors.push("warning");
      originalColors.push("warning");
      text.push("warning");
      originalText.push("warning");
    }
    if(document.getElementById("success-button").classList.contains("active")){
      colors.push("success");
      originalColors.push("success");
      text.push("success");
      originalText.push("success");
    }
    if(document.getElementById("info-button").classList.contains("active")){
      colors.push("info");
      originalColors.push("info");
      text.push("info");
      originalText.push("info");
    }
    if(document.getElementById("primary-button").classList.contains("active")){
      colors.push("primary");
      originalColors.push("primary");
      text.push("primary");
      originalText.push("primary");
    }
    if(document.getElementById("secondary-button").classList.contains("active")){
      colors.push("secondary");
      originalColors.push("secondary");
      text.push("secondary");
      originalText.push("secondary");
    }
    if(document.getElementById("dark-button").classList.contains("active")){
      colors.push("dark");
      originalColors.push("dark");
      text.push("dark");
      originalText.push("dark");
    }
    if(document.getElementById("light-button").classList.contains("active")){
      colors.push("light");
      originalColors.push("light");
      text.push("light");
      originalText.push("light");
    }
  }
  if (colors.length > 1) {
    document.getElementById("spinner_button").disabled = true;
    intervalOne = setInterval("movePositions()", 50);
    var random = Math.random();
    setTimeout("clearInterval(intervalOne)", 3000*random);
    setTimeout("secondInterval()", 3000*random);
  }
}
function secondInterval(){
  intervalTwo = setInterval("movePositions()", 100);
  var random = Math.random();
  setTimeout("clearInterval(intervalTwo)", 3000*random);
  setTimeout("thirdInterval()", 3000*random);
}
function thirdInterval(){
  intervalThree = setInterval("movePositions()", 200);
  var random = Math.random();
  setTimeout("clearInterval(intervalThree);", 3000*random);

  setTimeout("displaySpinnerResults();", 3000*random);
}
function displaySpinnerResults(){
  document.getElementById("colorResult").innerHTML = "Color: " + colors[0];
  document.getElementById("spinner_button").disabled = false;
}
var tempClass;
var tempText;
function movePositions(){
  tempClass = document.getElementById(originalColors[0]).classList + "";
  tempText = document.getElementById(originalColors[0]).innerHTML + "";
  for (var i = 1; i < colors.length; i++) {
    document.getElementById(originalColors[i-1]).classList.remove("alert-"+colors[i-1]);
    document.getElementById(originalColors[i-1]).classList.add("alert-"+colors[i]);
    document.getElementById(originalText[i-1]).innerHTML = text[i] + "";
  }
  document.getElementById(originalColors[colors.length-1]).classList = tempClass;
  document.getElementById(originalColors[colors.length-1]).innerHTML = tempText;
  var shiftedColor = colors.shift();//before: [red,warning,success,primary]
  colors.push(shiftedColor);//after: [orange,success,primary,red]
  var shiftedText = text.shift();
  text.push(shiftedText);
}
function reset(){
  for (var i = 0; i < originalColors.length; i++) {
    document.getElementById(originalColors[i]).classList.remove("alert-"+colors[i]);
    document.getElementById(originalColors[i]).classList.add("alert-"+originalColors[i]);
    document.getElementById(originalText[i]).innerHTML = originalText[i];
  }
  colors = [];
  originalColors = [];
  text = [];
  originalText =[];
  document.getElementById("colorResult").innerHTML = "Color: ";
  document.getElementById("spinner_button").disabled = false;
}
