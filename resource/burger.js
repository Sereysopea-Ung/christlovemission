const menu_btn = document.querySelector('.burger-menu');
const main_div = document.getElementById('main');
const menu_div = document.getElementById('menu');
let menu ={open:false};
menu_btn.addEventListener('click',function(){
    if(!menu.open){
        if($(window).width()<=400){
            $('#menu').css('width',$(window).width()+'px');
            main_div.classList.add('menu-open');
            menu_div.classList.add('menu-open');
            $('.menu-open').css('transform','translateX(-'+$(window).width()+'px');
        } else {
            $('#menu').css('width','400px');
            main_div.classList.add('menu-open');
            menu_div.classList.add('menu-open');
            $('.menu-open').css('transform','translateX(-400px)');
        }
        menu_btn.classList.add('open');
        menu.open=true;
    } else {
        menu_btn.classList.remove('open');
        // main_div.classList.remove('menu-open');
        // menu_div.classList.remove('menu-open');
        $('.menu-open').css('transform','translateX(0px)');
        menu.open=false;
    }
});


window.onload = function() {
    $(document).ready(function(){
        $(this).scrollLeft(0);
    });
}