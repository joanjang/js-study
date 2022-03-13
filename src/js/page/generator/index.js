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

  async seeMoreItems(button) {
    try {
      const data = () => this.moreItems.next();
      this.$button = document.querySelector(`.${button}`);
      this.setState(await data());
      this.template();
      this.$main.scrollTo(0, this.$main.scrollHeight);
    } catch (e) {
      alert(`[error] ${e}`);
    } finally {
      if (this.state.done) this.$button.classList.add("hide");
    }
  }

  setState(newState) {
    this.state = { ...newState };
    if (newState.value?.error) throw newState.value.message;
  }

  template() {
    this.state.value.forEach((item) => {
      const $child = document.createElement("div");
      $child.classList.add("item");
      $child.innerText = item;
      this.$button.before($child);
    });
  }

  async *moreItems() {
    let index = 0;
    while (1) {
      try {
        const response = await fetch(
          `${process.env.API_URL}/generator/${++index}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const { data, hasNextPage } = await response.json();
        if (!hasNextPage) return [...data];
        yield [...data];
      } catch ({ message }) {
        return { error: true, message };
      }
    }
  }
}
