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

  // existe mi clase navbar-activo
  if (!padre_nav.classList[1]) {
    console.log("no existe mi clase");
    padre_nav.classList.add("navbar-activo");
  } else if (padre_nav.classList[1] && window.pageYOffset < 200) {
    padre_nav.classList.remove("navbar-activo");
  }
});

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    btn.parentElement.parentElement.classList.add("navbar-activo");
    console.log("estoy a mas de 200");
  } else {
    console.log("estoy a menos de 200");
    btn.parentElement.parentElement.classList.remove("navbar-activo");
  }
};

// btn ancla del menu

var btn_inicio = document.getElementById("bnt-inicio");
var btn_formacion = document.getElementById("bnt-formacion");
var btn_proyectos = document.getElementById("bnt-proyectos");
var btn_contacto = document.getElementById("bnt-contacto");

btn_inicio.addEventListener("click", function () {
  btn.classList.remove("btn-mobile-activo");
  btn.nextElementSibling.classList.remove("menu-mobile");
  if (window.pageYOffset < 200) {
    btn.parentElement.parentElement.classList.remove("navbar-activo");
  }
});
btn_formacion.addEventListener("click", function () {
  btn.classList.remove("btn-mobile-activo");
  btn.nextElementSibling.classList.remove("menu-mobile");
});
btn_proyectos.addEventListener("click", function () {
  btn.classList.remove("btn-mobile-activo");
  btn.nextElementSibling.classList.remove("menu-mobile");
});
btn_contacto.addEventListener("click", function () {
  btn.classList.remove("btn-mobile-activo");
  btn.nextElementSibling.classList.remove("menu-mobile");
});
