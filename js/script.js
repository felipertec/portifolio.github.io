
let texto1 = document.getElementById('apresentacao1');
let texto2 = document.getElementById('apresentacao2');


function typeWriter(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra,i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
    
}

typeWriter(texto1);
setTimeout(() =>{
    typeWriter(texto2);
    texto2.style.visibility = 'visible';
}, 4000)

