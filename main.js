const btn = document.getElementById("btn");
var menu;
var padre_nav;
var redes = document.getElementById("redes");

function Comprobar(info) {
  // console.log(info.style);
  if (info.style.display == "") {
    return (info.style.display = "block");
  } else {
    return (info.style.display = "");
  }
}

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

// mover mis span a medida que el scroll baja
var span1 = [];
var span2 = [];
var U_card = document.getElementsByClassName("U-card");
for (const iterator of U_card) {
  span1.push(iterator.querySelector("span"));
  span2.push(iterator.querySelector("span").nextElementSibling);
}

for (const iterator of U_card) {
  iterator.addEventListener("click", function () {
    // console.log(iterator);
    var span_x1;
    var span_x2;
    iterator.classList.toggle("U-card-active");

    // añadimos una funcion que se encarga de verificar si existe mi un
    //  style display para asi ponerlo en block o dejarlo igual
    var info = iterator.nextElementSibling;
    // añadiendo mis span de cada iteraciona  una variable
    span_x1 = iterator.querySelector("span");
    span_x2 = iterator.querySelector("span").nextElementSibling;
    Comprobar(info);
    // a estos span les añado y les quito clases que necesito
    span_x1.classList.toggle("span-arrow1");
    span_x2.classList.toggle("span-arrow2");
    span_x1.classList.remove("span-arrow1-active");
    span_x2.classList.remove("span-arrow2-active");
    span_x1.classList.toggle("span-active1");
    span_x2.classList.toggle("span-active2");
  });
}

window.onscroll = function () {
  // al llegarcerca de los 300px se agregara la clase al navbar
  if (window.pageYOffset > 300) {
    btn.parentElement.parentElement.classList.add("navbar-activo");
    console.log("estoy a mas de 300");
  } else {
    btn.parentElement.parentElement.classList.remove("navbar-activo");
  }

  // conforme se acerque a mi apartade de tecnologia agregaraemos la clase a mis span
  if (window.pageYOffset > 1200 && window.pageYOffset < 1400) {
    for (const iterator of span1) {
      iterator.classList.add("span-arrow1-active");
    }
    for (const iterator of span2) {
      iterator.classList.add("span-arrow2-active");
    }
  } else {
    for (const iterator of span1) {
      iterator.classList.remove("span-arrow1-active");
    }
    for (const iterator of span2) {
      iterator.classList.remove("span-arrow2-active");
    }
  }
};

// btn ancla del menu

var btn_inicio = document.getElementById("bnt-inicio");
var btn_formacion = document.getElementById("bnt-formacion");
var btn_proyectos = document.getElementById("bnt-proyectos");
var btn_contacto = document.getElementById("bnt-contacto");
var btn_tecnologia = document.getElementById("bnt-tecnologia");

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
btn_tecnologia.addEventListener("click", function () {
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
