class Page {
  constructor(name, title) {
    this.name = name;
    this.title = title;
    this.body = document.querySelector("body");

    this.rendering();
  }

  rendering() {
    this.body.innerHTML = this.makeTemplate();
    const main = document.querySelector("main");
    main.innerHTML = this.subRendering();
  }

  subRendering() {}

  makeTemplate() {
    return `<div class="wrapper ${this.name}-wrapper">
    <header><h1 class="header-title">${this.title}</h1></header>
    <main class="${this.name}-container"></main>
    </div>`;
  }
}

export default Page;
