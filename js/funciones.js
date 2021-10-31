//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var header = document.getElementById("cabecera");
var main = document.getElementById("contenedor-principal");
var textoNav = document.getElementById("texto-nav");




//Evento para mostrar y ocultar menú
    function open_close_menu(){
        header.classList.toggle("cabecera_move");
        main.classList.toggle("main_move");
        textoNav.classList.toggle("texto-nav_move");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 730){
    header.classList.add("cabecera_move");
    main.classList.add("main_move");
    textoNav.classList.add("texto-nav_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 730){
        header.classList.remove("cabecera_move");
        main.classList.remove("main_move");
        textoNav.classList.remove("texto-nav_move");
    }

    if (window.innerWidth < 730){
        header.classList.add("cabecera_move");
        main.classList.add("main_move");
        textoNav.classList.add("texto-nav_move");
    }

});

function menu() {
    const menu_img = document.querySelector(".user-aside_img");
    menu_img.classList.toggle("user-aside_img-active");
    const menu = document.querySelector(".menu");
    menu.classList.toggle("menu-active");
    const menu_figure = document.querySelector(".menu-figure");
    menu_figure.classList.toggle("menu-figure-active");
    const menu_ul = document.querySelector(".menu-ul");
    menu_ul.classList.toggle("menu-ul-active");

    const contenedor_principal = document.querySelector(".contenedor-principal");
    contenedor_principal.classList.toggle("contenedor-principal-active");

    var menu_a = document.getElementsByClassName("menu-a");
    for(let i = 0; i < menu_a.length; i++){
        menu_a[i].classList.toggle("menu-a-active");
    }

    var menu_li = document.getElementsByClassName("menu-li");
    for(let i = 0; i < menu_li.length; i++){
        menu_li[i].classList.toggle("menu-li-active");
    }

    const menu_info = document.getElementById("menu_info");
    if(menu_info.innerHTML === "") {
        menu_info.innerHTML = '<h4 class="menu-text-user my-2">USUARIO</h4><h5 class="menu-cargo my-2">SUPERVISOR</h5><h6 class="menu-text-email my-2"><a href="mailto:user@gmail.com">user@gmail.com</a></h6>';
    } else { menu_info.innerHTML = "" }
    
}