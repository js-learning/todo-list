const TodoItemFunctions = {
  create: function (name) {
    return {
      name: name,
      checked: false
    }
  },
  getRow: function (item) {
    return `<li class="list-group-item">
                <span class="bmd-form-group is-filled">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox">
                            <span class="checkbox-decorator">
                                <span class="check"></span>
                            </span> ${item.name}
                        </label>
                    </div>
                </span>
                <a href="#" class="delete-link label label-default label-pill pull-xs-right">
                    <i class="material-icons">delete</i>
                </a>
            </li>`;
  },
  htmlToElement: function (html) {
    const template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  },
  addEvents: function (todoList, todoItem, todoItemHtml) {
    const deleteLink = todoItemHtml.querySelector('.delete-link');
    deleteLink.addEventListener('click', function (event) {
      event.preventDefault();

      const index = todoList.indexOf(todoItem);
      todoList.splice(index, 1);
      todoItemHtml.remove();
    });

    const checkBox = todoItemHtml.querySelector('input[type="checkbox"]');
    checkBox.addEventListener('change', function (event) {
      event.preventDefault();

      const target = event.target;
      todoItem.checked = target.checked;
    })
  }
};

const todoList = [];
const todoListElm = document.getElementById('todoList');

document.getElementById('addTodoItemForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const itemName = formData.get('itemName');

  if (itemName) {
    const todoItem = TodoItemFunctions.create(itemName);
    todoList.push(todoItem);

    const todoListHtml = TodoItemFunctions.htmlToElement(TodoItemFunctions.getRow(todoItem));
    todoList.elm = todoListHtml;
    todoListElm.appendChild(todoListHtml);
    TodoItemFunctions.addEvents(todoList, todoItem, todoListHtml);
    form.reset();
    todoListElm.focus();
  }
});
