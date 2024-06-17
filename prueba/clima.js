const provincia = document.getElementById('provincia');
const region = document.getElementById('region');
// const current_date = document.getElementById('current_date');
const temperatura = document.getElementById('temperatura');
const icon = document.getElementById('icon');
let weather = () => {
    let url = `https://api.weatherapi.com/v1/current.json?key=17b604a623b54845835164604241206&q=Mostoles`;
    fetch(url)
    .then( respuesta => respuesta.json())
    .then( data => {
        // console.log(data.location.localtime);
        provincia.textContent  = `Móstoles,`;
        region.textContent  = data.location.region;
        // current_date.textContent = data.location.localtime;
        temperatura.textContent = `${data.current.temp_c}°C`;
        icon.src = `https:${data.current.condition.icon}`;
    });
}



let reloj = document.getElementById('reloj');
let  mostrarReloj = function(){
  
    let  miReloj = new Date();
    let  day = miReloj.getDate();
    let  month = miReloj.getMonth() + 1;
    let  fullYear = miReloj.getFullYear().toString().slice(-2);
 
    let  hour = miReloj.getHours();
    let  minutes = miReloj.getMinutes();
    let  seconds = miReloj.getSeconds();

        if(hour < 10){
            hour = `0${hour}`;
        }
        if(minutes < 10){
            minutes = `0${minutes}`;
        }
        if(seconds < 10){
            seconds = `0${seconds}`;
        }

  reloj.textContent = `${day}/${month}/${fullYear} ${hour}:${minutes} `;

}
weather();
setInterval(mostrarReloj, 1000);

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.getElementById("menu").classList.toggle("center")
    // document.querySelector("options").classList.toggle("options-change");

}

// // Supongamos que tu menú hamburguesa tiene el id 'menuHamburguesa'
// var menuHamburguesa = document.querySelector('.hide');
// var menuBg = document.querySelector('.menu-bg');

// var ultimoScroll = window.pageYOffset; // Guardamos la posición inicial del scroll

// window.onscroll = function() {
//   var scrollActual = window.pageYOffset; // Obtenemos la posición actual del scroll

//   if (ultimoScroll > scrollActual) {
//     // Si el scroll es hacia arriba, mostramos el menú
//     menuBg.style.top = '0';
//     menuHamburguesa.style.top = '20px';
//   } else {
//     // Si el scroll es hacia abajo, ocultamos el menú
//     menuHamburguesa.style.top = '-600px'; // Ajusta este valor según el tamaño de tu menú
//     menuBg.style.top = '-600px'; // Ajusta este valor según el tamaño de tu menú
//   }

//   ultimoScroll = scrollActual; // Actualizamos la posición del scroll
// }
