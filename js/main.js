
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let number3 = document.querySelector('#number3');


function crea_intervallo(elemento, numMax, tempo) {
    let counter = 0;
    let intervallo = setInterval(()=> {

        if (counter < numMax) {
            counter++;
            elemento.innerText = counter;
        } else {
            clearInterval(intervallo);
        }
    
    }, tempo);

}

let controllo_ripetzione = false;

let osserva = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting && controllo_ripetzione == false) {

            crea_intervallo(number1, 24, 50);
            crea_intervallo(number2, 511, 1);
            crea_intervallo(number3, 236, 7);

            controllo_ripetzione = true;

        }

    })

});

osserva.observe(number3)
