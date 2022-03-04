import "regenerator-runtime";
import PlusButton from "../../component/PlusButton";

import Page from "../../core/Page";

export default class Generator extends Page {
  initialize() {
    this.SHOWING_STR = "안녕하세요저는장지은입니다😝";
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
    const items = this.SHOWING_STR.match(/.{1,3}/g);
    let len = items.length;

    for (const item of items) {
      if (!--len) return [...item];
      yield [...item];
    }
  }
}
