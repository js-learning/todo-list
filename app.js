const form = document.querySelector('#addTodoItemForm');
const ul = document.querySelector('#todoList');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const input = document.querySelector('#todoItemName');
  addElmToList(input.value);

  form.reset();
});

function addElmToList(value) {
  const li = document.createElement('li');
  li.innerHTML = `<input type="checkbox">${value}
    <button class="deleteItem">Supprimer</button>`;

  const deleteItemButton = li.querySelector('.deleteItem');
  deleteItemButton.addEventListener('click', function () {
    li.remove();
  });

  ul.appendChild(li);
}

const deleteAllItemsBtn = document.querySelector('#deleteAllItems');
deleteAllItemsBtn.addEventListener('click', function () {
  const lis = ul.querySelectorAll('li');

  lis.forEach(function (li) {
    const checkBox = li.querySelector('input[type="checkbox"]');
    if (checkBox.checked) {
      li.remove();
    }
  })
});