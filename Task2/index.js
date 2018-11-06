
var elems = document.querySelectorAll('div,p,button');

for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", highlightThis, true);
  elems[i].addEventListener("click", highlightThis, false);
}

function highlightThis() {
  alert(this.tagName, this.eventPhase);
}



/*let b = document.querySelector('body');
b.onclick = alert("click on body");
*/