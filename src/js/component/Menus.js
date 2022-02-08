import Component from "../core/Component";

export default class Munus extends Component {
  template() {
    const { items } = this.props;
    this.className = `${this.target}-menu`;

    let temp = "<ul>";
    temp += items
      .map((item) => `<li class=${this.className} title=${item}>${item}</li>`)
      .join("");

    return temp + "</ul>";
  }

  setEvent() {
    const { goToPage } = this.props;
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
          goToPage(nodeValue);
        }
      );
    });
  }
}
