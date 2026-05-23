document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll("nav a");
  var pagina = window.location.pathname.split("/").pop() || "index.html";
  links.forEach(function(link) {
    if (link.getAttribute("href") === pagina) {
      link.classList.add("activo");
    }
  });
});

function abrirPopup(id) {
  document.getElementById(id).classList.add("activo");
}

function cerrarPopup(id) {
  document.getElementById(id).classList.remove("activo");
}