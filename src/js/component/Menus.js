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
        .map((item) => `<li class=${this.className} title=${item}>${item}</li>`)
        .join("")}
    </ul>`;
  }

  setEvent() {
    this.$target.querySelectorAll(`.${this.className}`).forEach((menu) => {
      menu.addEventListener(
        "click",
        ({
          target: {
            attributes: {
              title: { nodeValue },
            },
          },
        }) => {
          this.Router.goToPage(nodeValue, this.Router);
        }
      );
    });
  }
}
