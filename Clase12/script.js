const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');

const btn = document.querySelector('#btnCalcular');

const result = document.querySelector('#resultado');


let sumaInputs = () => {
    //console.log(parseInt(input1.value) + parseInt(input2.value));
    const suma = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = 'Resultado: ' + suma;
}

//addEvent, herramienta utilizada para no utilizar codigo JS en el html
btn.addEventListener('click',sumaInputs);