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
<<<<<<< HEAD
    this.$main = $wrapper.querySelector(".container");
=======
    const $main = $wrapper.querySelector(".container");
>>>>>>> master

    // Page에 따른 classList, Title 추가 및 변경
    $header.innerText = this.title;
    this.replaceClassName($wrapper, "wrapper");
<<<<<<< HEAD
    this.replaceClassName(this.$main, "container");

    this.$main.innerHTML = "";
=======
    this.replaceClassName($main, "container");

    $main.innerHTML = "";
>>>>>>> master
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
