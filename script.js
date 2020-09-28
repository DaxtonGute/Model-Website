var toggled = false;

function toggleMenuSwitch() {
  if(toggled){
    document.getElementById('DDM').style.display = "none";
    document.getElementById('menuSwitch').innerHTML = "&#9776;";
    toggled = false;
  }
  else{
    document.getElementById('DDM').style.display = "block";
    document.getElementById('menuSwitch').innerHTML = "☓";
    toggled = true;
  }
}



// try to get animation to work!!! please!
function slideUp(){
 var elem = document.getElementById("submenu");
 var pos = 0;
 var id = setInterval(frame, 1);
 function frame() {
   if (pos == 350) {
     clearInterval(id);
   } else {
     pos++;
     elem.style.top = pos + 'px';
   }
 }
}

function slideDown(){
  var elem = document.getElementById("menuSwitch");
  var pos = 360;
  var id = setInterval(frame, 10);
  function frame() {
   if (pos == 0) {
     clearInterval(id);
   } else {
     pos--;
     elem.style.color = "rgb(0,0,"+(pos/2)+");";
     elem.style.top = pos + 'px';
   }
  }
}
