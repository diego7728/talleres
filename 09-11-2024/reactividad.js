const boton = document.getElementById('boton');
const incremento = document.getElementById('incremento');
let acumulador = 1;
let contador = 0;

boton.addEventListener('click', function () {
    contador += acumulador;
    incremento.textContent = contador;
    if (contador % 5 === 0) {
        acumulador += 1;
    }
    if (contador >= 100) {
        boton.disabled = true;
    }
})

const texto = document.getElementById ('texto');

texto.addEventListener('blur',function() {
    texto.value = texto.value.toUpperCase();
})

const imagen = document.getElementById('imagen');

imagen.addEventListener('mouseenter', () => {
    imagen.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbwXlnav6gKZYDSlAHc21P0frcQYPv_MmJQ&s'; 
});

imagen.addEventListener('mouseleave', () => {
    imagen.src = 'https://www.cocacolaep.com/assets/Uploads/resources/Coca-Cola-1210.jpg';
});


const aumentarBtn = document.getElementById('aumentar');
const disminuirBtn = document.getElementById('disminuir');
let fontSize = 24; 

aumentarBtn.addEventListener('click', () => {
    fontSize += 2;
    document.querySelector('h1').style.fontSize = fontSize + 'px';
});

disminuirBtn.addEventListener('click', () => {
    if (fontSize > 24) { 
        fontSize -= 2;
        document.querySelector('h1').style.fontSize = fontSize + 'px';
    }
});