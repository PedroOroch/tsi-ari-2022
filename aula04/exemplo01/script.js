let arrastas = document.querySelectorAll('.arrastavel');

let areaDeArrast = document.getElementById('areaDeArraste');

let arrastavelAtual;




arrastas.forEach(el => {
        el.addEventListener("dragstart", function() {
            console.log('começou a ser arrastado');

            arrastavelAtual = el;
        });
    })
    /*
    arrasta.addEventListener("dragstart", function() {
        console.log('começou a ser arrastado');
    });
    */

areaDeArrast.addEventListener("dragover", function(e) {
    e.preventDefault();
    areaDeArrast.style.backgroundColor = '#F2F000';
});

areaDeArrast.addEventListener("dragleave", function() {
    areaDeArrast.style.backgroundColor = 'blue';
});

areaDeArrast.addEventListener('drop', function(e) {
    areaDeArrast.appendChild(arrastavelAtual.cloneNode());
    console.log('elemento solto');
})