export default class Page {
  constructor(name, title = name) {
    this.name = name;
    this.title = title;

    this.render();
  }

  render() {
    const $wrapper = document.querySelector(".wrapper"),
      $header = $wrapper.querySelector(".header-title"),
      $main = $wrapper.querySelector("main");

    $header.innerText = this.title;
    $wrapper.classList.add(`${this.name}-wrapper`);
    $main.classList.add(`${this.name}-container`);

    $main.innerHTML = this.template();
  }

  template() {
    return "";
  }
}
