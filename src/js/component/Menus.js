import Component from "../core/Component";

export default class Munus extends Component {
  constructor(target, items, Router) {
    super(target, items);
    this.Router = Router;
  }

  template() {
    this.className = `${this.target}-menu`;
    return `<ul>
      ${this.items
        .map(
          (item) =>
            `<li class=${this.className} title=${item.name}>${item.name}</li>`
        )
        .join("")}
    </ul>`;
  }

  setEvent() {
    this.$target.querySelectorAll(`.${this.className}`).forEach((menu) => {
      menu.addEventListener("click", ({ target: { innerText } }) => {
        this.Router.goToPage(innerText.toLowerCase(), this.Router);
      });
    });
  }
}
