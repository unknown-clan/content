document.getElementById("logo").addEventListener("click", click);

function click() {
  let logo = document.getElementById("logo");
  let header = document.getElementById("header");
  var elements = header.children;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].id !== "logo") {
      if (elements[i].style.display === "none") {
        elements[i].style.display = "block";
        header.style.backgroundColor = "initial";
        header.style.backgroundColor = "";
        header.style.boxShadow = "";
        logo.style.backgroundColor = "";
      } else {
        elements[i].style.display = "none";
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
        logo.style.backgroundColor = "rgb(63, 63, 63)";
      }
    }
  }
}
