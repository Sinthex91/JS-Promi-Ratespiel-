// function onLoadEvent() {
//   alert("Ich Lebe! HALLO WELT!");
// }
// window.onload = onLoadEvent;

function nixBlur(eventObj) {
  let img = eventObj.target;
  img.style.filter = "blur(0px)";
  setTimeout(neuesSpiel, 3000);
}
function neuesSpiel() {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.filter = "blur(10px)";
  }
}

function init() {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = nixBlur;
  }
  let neuStart = document.getElementById("neuStart");
  neuStart.onclick = neuesSpiel;
}
window.onload = init;
