var toggled = false;
//Switching Menus
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
