//initializing elements
const list = document.querySelector('.todos');
const addForm = document.querySelector('.add');
const searchField = document.querySelector('.search').search;
console.log(searchField);

let createListItem = (str) => {
    // let liTag = document.createElement('li');
    // liTag.classList.add("list-group-item", 
    //     "d-flex", 
    //     "justify-content-between", 
    //     "align-items-center");
    // let span = document.createElement('span');
    // span.textContent = str;
    // liTag.appendChild(span);

    // let icon = document.createElement('i');
    // icon.classList.add("fas", "fa-trash-alt", "delete");
    // liTag.appendChild(icon);
    // return liTag;

    //method is simplified using template string and html template element
    let template = document.createElement('template');
    template.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${str}</span>
        <i class="fas fa-trash-alt delete"></i>
    </li>`;
    return template.content.childNodes[0];
}


let listToStrings = () => {
    let array = [];
    list.querySelectorAll('li.list-group-item').forEach( e => {
        let text = e.querySelector('span').textContent;
        array.push(text);
    })
    return array;
}

let stringToList = (array) => {
    array.map(str => createListItem(str)).forEach(e => list.appendChild(e));
}

//submit handler
addForm.addEventListener('submit', e => {
    e.preventDefault();
    //remove whitespaces
    const todo = addForm.add.value.trim();
    if(todo.length > 0){
        if(searchField.value.length === 0 || todo.includes(searchField.value)){
            list.appendChild(createListItem(todo));
        }
        currentItems.push(todo);
        addForm.reset();
    }
});

//deletion handler
list.addEventListener('pointerdown', e => {
    let target = e.target;
    if(target.classList.contains('delete')){
        e.preventDefault();
        let liTag = target.closest('li');
        if(liTag !== null){
            let str = liTag.querySelector('span').textContent;
            currentItems = currentItems.filter(e => e != str);
            liTag.remove();
        }
    }
});

//search handler
searchField.addEventListener('input', (e) => {
    displayedItems = currentItems;
    const trimmedValue = e.target.value.trim();
    if(trimmedValue.length > 0)
    {
        displayedItems = currentItems.filter(str => str.includes(trimmedValue));
    }
    while(list.lastElementChild){
        list.removeChild(list.lastElementChild);
    }
    displayedItems.map(str => createListItem(str)).forEach(e => list.appendChild(e));
})

let currentItems = listToStrings();
let displayedItems = listToStrings();

