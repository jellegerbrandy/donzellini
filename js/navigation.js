function opendescription() {
  document.getElementById("description").style.borderColor = "#bdac8e";
}

function opentrailer() {
  document.getElementById("trailer").style.borderColor = "#bdac8e";
}

function openabout() {
  document.getElementById("theprojectblock").style.display = "block";
  document.getElementById("alessandraandemmablock").style.display = "block";
  document.getElementById("themeofthedocumentaryblock").style.display = "block";
  document.getElementById("aboutus").style.borderColor = "#bdac8e";
}

function openprocess() {
  document.getElementById("theprocessandresults").style.display = "block";
  document.getElementById("process").style.borderColor = "#bdac8e";
}

function openresources() {
  document.getElementById("resources").style.borderColor = "#bdac8e";
}

function opencontacts() {
  document.getElementById("contactus").style.display = "block";
  document.getElementById("contacts").style.borderColor = "#bdac8e";
}

function closesubmenu(){
  document.getElementById("description").style.borderColor = "transparent";
  document.getElementById("trailer").style.borderColor = "transparent";
  document.getElementById("theprojectblock").style.display = "none";
  document.getElementById("alessandraandemmablock").style.display = "none";
  document.getElementById("themeofthedocumentaryblock").style.display = "none";
  document.getElementById("aboutus").style.borderColor = "transparent";
  document.getElementById("theprocessandresults").style.display = "none";
  document.getElementById("process").style.borderColor = "transparent";
  document.getElementById("resources").style.borderColor = "transparent";
  document.getElementById("contactus").style.display = "none";
  document.getElementById("contacts").style.borderColor = "transparent";
}

function posteron (){
  document.getElementById("poster").setAttribute("src", "./img/poster2.jpg");
}

function posteroff (){
  document.getElementById("poster").setAttribute("src", "./img/poster.jpg");
}

function bigposter (){
  document.getElementById("bigpiccontainer").style.display = "block";
  document.getElementById("bigpicture").style.display = "block";
}

function closeposter (){
  document.getElementById("bigpiccontainer").style.display = "none";
  document.getElementById("bigpicture").style.display = "none";
}
