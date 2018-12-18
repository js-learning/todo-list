class TodoList {
    constructor(listElm) {
        this.listElm = listElm;
        this.listItems = [];
    }

    add(todoItem) {
        this.listItems.push(todoItem);
        this.listElm.append(todoItem.getRow());
    }
}

class TodoItem {
    constructor(value){
        this.value = value;
        this.checked = false;
        this.row = undefined;
    }

    getHtml() {
        return `<li class="list-group-item">
                <span class="bmd-form-group is-filled">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox">
                            <span class="checkbox-decorator">
                                <span class="check"></span>
                            </span> ${this.value}
                        </label>
                    </div>
                </span>
            </li>`;
    }

    getRow() {
        if (!this.row) {
            this.row = createElementFromHTML(this.getHtml());
        }

        return this.row;
    }
}

function createElementFromHTML(html) {
    const template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

const todolistElm = document.querySelector("#todoList");
let todoList = new TodoList(todolistElm);

const addTodoItemForm = document.querySelector("#addTodoItemForm");
addTodoItemForm.addEventListener("submit", function(event){
    event.preventDefault();

    const form = event.target;
    const todoItemName = form.querySelector("#todoItemName");

    if (todoItemName.value) {
        const todoItem = new TodoItem(todoItemName.value);
        todoList.add(todoItem);
        form.reset();
    }
});