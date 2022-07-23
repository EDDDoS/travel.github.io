var menu = document.querySelector('#menu');
var menu_desplegable = document.querySelector('.menu_desplegable_menu');
var close_menu = document.querySelector('.close_menu');
var container = document.querySelector('.container');

menu.preve

menu.addEventListener('click', () =>{
    menu_desplegable.classList.add('menu_desplegable_menu_show');
    container.classList.add('container_opacity');
});

close_menu.addEventListener('click', ()=>{
    menu_desplegable.classList.remove('menu_desplegable_menu_show');
    container.classList.remove('container_opacity');
});