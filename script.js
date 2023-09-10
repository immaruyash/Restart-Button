function showDialog() { 
    var dialog = document.getElementById("myDialog");
    dialog.show(); 
  }
  
  
var i = 0;

function loaderFunction() {
    document.getElementById("restart").style.display = "none";
    document.getElementById("percentage").style.display = "block";
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("percentage");
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        document.getElementById("percentage").style.display = "none";
        showDialog();
        i = 0;
      } else {
        width++;
        elem.style.width = width/2 + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}