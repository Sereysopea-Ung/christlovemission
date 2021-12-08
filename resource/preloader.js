let loader_url = [
    'resource/preloader-blue.gif',
    'resource/preloader-green.gif',
    'resource/preloader-green-blue.gif'
    ];
let random_number = Math.floor(Math.random()*3);


document.getElementById('preloader').style.background = `#0d1321 url(${loader_url[random_number]}) no-repeat center center`;
document.getElementById('preloader').style.backgroundSize = '15%'; 



