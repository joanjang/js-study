export default class Page {
  state;
  constructor(pageName, title = pageName) {
    this.pageName = pageName;
    this.title = title;

    this.initialize();
    this.render();
  }

  initialize() {}

  render() {
    const $wrapper = document.querySelector(".wrapper");
    const $header = $wrapper.querySelector(".header-title");
    this.$main = $wrapper.querySelector(".container");

    // Page에 따른 classList, Title 추가 및 변경
    $header.innerText = this.title;
    this.replaceClassName($wrapper, "wrapper");
    this.replaceClassName(this.$main, "container");

    this.$main.innerHTML = "";
    this.mounted();
  }

  replaceClassName(target, className) {
    const { classList } = target;
    const lastClass = classList[classList.length - 1];

    if (lastClass.includes("-"))
      classList.replace(lastClass, `${this.pageName}-${className}`);
    else classList.add(`${this.pageName}-${className}`);
  }

  mounted() {}
}
