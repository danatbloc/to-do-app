function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event)=> {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("class", "delete");

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteButton);

    toDoList.appendChild(newLi);

    newToDoText.value = '';

    const deleteButtons = document.getElementsByClassName('delete');

    for (var i=0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click',deleteFunction,false)
    }
  });
}

let deleteFunction = function(){
  const lineItem = this.parentElement;
  const list = lineItem.parentElement;
  list.removeChild(lineItem);
}


window.onload = function() {
  onReady();
};
