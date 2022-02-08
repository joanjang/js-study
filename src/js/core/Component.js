export default class Component {
  constructor(target, props) {
    this.target = target;
    this.props = props;
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
