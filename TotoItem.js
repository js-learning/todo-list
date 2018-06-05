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