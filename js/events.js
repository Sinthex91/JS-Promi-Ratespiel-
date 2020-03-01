function nixBlur(eventObj) {
  let img = eventObj.target;
  img.style.filter = "blur(0px)";
}
function reBlur(eventObj) {
  let img = eventObj.target;
  img.style.filter = "blur(8px)";
}

function init() {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = nixBlur;
    images[i].onmouseout = reBlur;
  }
}
window.onload = init;
