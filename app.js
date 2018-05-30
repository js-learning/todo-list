(function ($) {
    'use strict';

    class TodoItem {
        constructor(name) {
            this.name = name;
            this.checked = false;
        }

        getRow() {
            return `<li class="list-group-item">
                <span class="bmd-form-group is-filled">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox">
                            <span class="checkbox-decorator">
                                <span class="check"></span>
                            </span> ${this.name}
                        </label>
                    </div>
                </span>
            </li>`;
        }
    }

    const todoList = [];
    const todoListElm = document.getElementById('todoList');

    document.getElementById('addTodos').addEventListener('submit', (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const itemName = formData.get('itemName');

        if (itemName) {
            const todoItem = new TodoItem(itemName);
            todoList.push(todoItem);
            todoListElm.appendChild(htmlToElement(todoItem.getRow()));
            form.reset();
            todoListElm.focus();
        }

    });

    function htmlToElement(html) {
        const template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }
})(window);