const btn = document.getElementById("btn");
var menu;
var padre_nav;
var redes = document.getElementById("redes");
btn.addEventListener("click", function hola() {
  padre_nav = btn.parentElement.parentElement;
  btn.classList.toggle("btn-mobile-activo");
  menu = btn.nextElementSibling;
  menu.classList.toggle("menu-mobile");
  redes.classList.toggle("redes-sociales-activo");
  if (padre_nav.classList == "navbar-activo") {
    padre_nav.classList.remove("navbar-activo");
  } else {
    padre_nav.classList.add("navbar-activo");
  }
});

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    btn.parentElement.parentElement.classList.add("navbar-activo");
  } else {
    btn.parentElement.parentElement.classList.remove("navbar-activo");
  }
};

// $(window).scroll(function () {
//   if (this.scrollY > 20) {
//   }
// });
