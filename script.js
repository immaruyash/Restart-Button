function showDialog() { 
    var dialog = document.getElementById("myDialog");
    dialog.show(); 
  }
  
function replay(){
    document.getElementById("restart").style.display = "block";
    document.getElementById("container").style.display = "none"
    document.getElementById("myDialog").style.display = "none";
}

function restart(){
  document.getElementById("restart").style.display = "none";
  document.getElementById("container").style.display = "block";
  setTimeout('document.getElementById("container").style.display = "none";',5050);
  setTimeout('document.getElementById("myDialog").style.display = "block";',5050);
}
