const FORMULARIO = document.querySelector('#form-tarefa');
const LISTA = document.querySelector('.collection');
const BTN_LIMPAR = document.querySelector('.limpar-tarefas');
const FILTRO = document.querySelector('#filtro');
const CAMPO_TAREFA = document.querySelector('#tarefa');

function carregaMonitorDeEventos() {

    //Eventos
    document.addEventListener('DOMContentLoaded', pegaTarefa);
    FORMULARIO.addEventListener('submit', adicionaTarefa);
    LISTA.addEventListener('click', apagaTarefa);
    BTN_LIMPAR.addEventListener('click', apagaTodasTarefas);
    FILTRO.addEventListener('keyup', filtraTarefa);
}

function adicionaTarefa(evento) {

    evento.preventDefault();

    if (CAMPO_TAREFA.value === '') //verifica se o campo está vazio
        alert('Insira uma tarefa');
    else {
        //cria os noovos elementos

        const LI = document.createElement('li');

        LI.className = 'collection-item';

        LI.appendChild(document.createTextNode(CAMPO_TAREFA.value));

        const A = document.createElement('a');

        A.className = 'apaga-tarefa secondary-content';

        const I = document.createElement('i');

        I.className = 'fa fa-remove';

        A.appendChild(I);

        LI.appendChild(A);


        //FIM cria os novos elementos

        LISTA.appendChild(LI); //adiciona à lista de tarefas


        console.log(LI);
    }

    gravaTarefaNoLocalStorage(CAMPO_TAREFA)

    CAMPO_TAREFA.value = '';

}

function filtraTarefa(evento) {

    evento.preventDefault();

    const TEXTO = evento.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(tarefa) {

        const ITEM = tarefa.firstChild.textContent;

        if (ITEM.toLowerCase().indexOf(TEXTO) != -1) //-1 signifca que não há o que está sendo buscado
            tarefa.style.display = 'block';
        else
            tarefa.style.display = 'none';


    })
}

function apagaTarefa(evento) {

    evento.preventDefault();

    if (evento.target.parentElement.classList.contains('apaga-tarefa')) {
        evento.target.parentElement.parentElement.remove();
    }

    apagaDoLocalStorage(evento.target.parentElement.parentElement);

}

function apagaDoLocalStorage(tarefaParaApagar) {


    let tarefas;

    if (localStorage.getItem('tarefas') === null)
        tarefas = [];
    else
        tarefas = JSON.parse(localStorage.getItem('tarefas'));

    console.log(tarefas);

    tarefas.forEach(function(tarefa, indice) {
        if (tarefaParaApagar.textContent === tarefa)
            tarefas.splice(indice, 1);
    });

    console.log(tarefas);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function apagaTodasTarefas(evento) {
    try {
        evento.preventDefault();

        LISTA.innerHTML = '';

        apagaTodosLocalStorage();
    } catch (e) {
        alert('Ocorreu um Problema: ' + e.message);
    }
}

function apagaTodosLocalStorage() {

    localStorage.removeItem('tarefas');
}

function gravaTarefaNoLocalStorage(tarefa) {
    try {
        let tarefas;

        if (localStorage.getItem('tarefas') === null)

            tarefas = [];

        else {

            tarefas = JSON.parse(localStorage.getItem('tarefas'));
        }
        tarefas.push(tarefa.value);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));

    } catch (e) {
        alert('Ocorreu um Problema: ' + e.message);
    }

}

function pegaTarefa() {

    let tarefas;

    if (localStorage.getItem('tarefas') === null)
        tarefas = [];
    else
        tarefas = JSON.parse(localStorage.getItem('tarefas'));

    tarefas.forEach(function(tarefa) {

        //cria os novos elementos
        const LI = document.createElement('li');

        LI.className = 'collection-item';

        LI.appendChild(document.createTextNode(tarefa));

        const A = document.createElement('a');

        A.className = 'apaga-tarefa secondary-content';

        const I = document.createElement('i');

        I.className = 'fa fa-remove';

        A.appendChild(I);

        LI.appendChild(A);

        LISTA.appendChild(LI);
        //fim cria os novos elementos



    })
}

carregaMonitorDeEventos();

try {
    carregaMonitorDeEventos();
} catch (e) {
    alert('Ocorreu um Problema: ' + e.message);
}