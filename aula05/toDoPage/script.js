let toDoText = document.getElementById('toDo');
let addButton = document.getElementById('addButton');
let toDoList = document.getElementById('toDoList');
const LOCAL_STORAGE_KEY = 'todolist';



toDoText.value = '';

function addItem() {



    let toDoItem = toDoText.value;
    let toDoItems = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (toDoItems == null) {
        localStorage.setItem(LOCAL_STORAGE_KEY, toDoItem);
    } else {
        localStorage.setItem(LOCAL_STORAGE_KEY, toDoItems + ',' + toDoItem);
    }


}

function renderList() {

    let toDoItems = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!toDoItems) return;

    let items = toDoItems.split(',');

    items.forEach(el => {
        let items = document.createElement('li');
        items.innerText = el;
        toDoList.appendChild(items);
    })
}
addButton.onclick = addItem();