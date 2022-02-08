import Page from "../../core/Page";
import Menus from "../../component/Menus";

import routes from "../../router/routes";

export default class Home extends Page {
  constructor(title, Router) {
    super(title, "development note");
    this.Router = Router;
  }

  initialize() {
    this.state = Object.values(routes)
      .map(({ title }) => title)
      .slice(1);
  }

  mounted() {
    const { items, goToPage } = this;
    new Menus(this.pageName, { items, goToPage: goToPage.bind(this) });
  }

  get items() {
    return this.state;
  }

  goToPage(path) {
    this.Router.goToPage(path, this.Router);
  }
}
