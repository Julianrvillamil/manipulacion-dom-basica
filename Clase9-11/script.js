//console.log("Hello World");

//querySelector para seleccionar por selector ej p, h1, h2
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

//Obtener el valor del input
console.log(input.value);

//{} para imprimir multiples variables
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

/*Cambia el texto, aunque tabien aplica codigo html
Cosa que puede resultarpelirosa*/
//h1.innerHTML='patito <br> feo'

/*La solucion: */
h1.innerText='patito <br> feo';

/* leer un atributo de alguna etiqueta*/
console.log(h1.getAttribute('pantalla'));

/*Modificar alguna clase de alguna etiqueta */
h1.setAttribute('pantalla', 'verde')
console.log(h1.getAttribute('pantalla'));
//agrega la class = "rojo" en el dom sin modificar el html
h1.classList.add('rojo')

//quita la clase verde desde js
h1.classList.remove('verde')

//pone un input por defecto 
input.value = 456;

//console.log(document.createElement('span'));

//Crea un elemento htm desde JS
const img = document.createElement('img');
//Se le agregan los atributos src y alt
img.setAttribute('src', 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=_3VnSPSl');
img.setAttribute('alt', 'gatito:3')
console.log(img);

//Se remṕaza el elemento pid con la imagen
//pid.append(img);
pid.replaceWith(img);