import "regenerator-runtime";
import PlusButton from "../../component/PlusButton";

import Page from "../../core/Page";

export default class Generator extends Page {
  initialize() {
    this.state = {};
  }

  mounted() {
    const { seeMoreItems } = this;
    this.moreItems = this.moreItems();
    new PlusButton(this.pageName, { seeMoreItems: seeMoreItems.bind(this) });
  }

  seeMoreItems(button) {
    this.$button = document.querySelector(`.${button}`);

    this.setState(this.moreItems.next());
    this.template();
    this.$main.scrollTo(0, this.$main.scrollHeight);

    if (this.state.done) this.$button.classList.add("hide");
  }

  setState(newState) {
    this.state = { ...newState };
  }

  template() {
    this.state.value.forEach((item) => {
      const $child = document.createElement("div");
      $child.classList.add("item");
      $child.innerText = item;
      this.$button.before($child);
    });
  }

  *moreItems() {
    yield ["안", "녕", "하"];
    yield ["세", "요", "저"];
    yield ["는", "장", "지"];
    yield ["은", "입", "니"];
    return ["당"];
  }
}
