class TotoList {
  constructor(listElm) {
    this.listElm = listElm;
    this.listItems = [];
  }

  add(todoItem) {
    this.listItems.push(todoItem);
    this.listElm.append(todoItem.getRow());
  }
}