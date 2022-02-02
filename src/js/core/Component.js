export default class Component {
  constructor(target, items) {
    this.target = target;
    this.items = items;
    this.$target = document.querySelector(`.${target}-container`);
    this.render();
  }

  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }

  template() {
    return "";
  }

  setEvent() {}
}
