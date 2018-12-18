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
            </li>`;
    },
    htmlToElement: function (html) {
        const template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
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
        todoListElm.appendChild(TodoItemFunctions.htmlToElement(TodoItemFunctions.getRow(todoItem)));
        form.reset();
        todoListElm.focus();
    }

});
