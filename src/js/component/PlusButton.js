import Component from "../core/Component";

export default class PlusButton extends Component {
  template() {
    this.className = "see-more-button";
    return `<div class=${this.className}><i class="fa fa-plus"></i></div>`;
  }

  setEvent() {
    const { seeMoreItems } = this.props;
    this.$target
      .querySelector(`.${this.className}`)
      .firstChild.addEventListener("click", () => seeMoreItems(this.className));
  }
}
