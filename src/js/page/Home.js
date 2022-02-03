import Page from "../core/Page";
import Menus from "../component/Menus";

const HOME = "home";
export default class Home extends Page {
  constructor(routes, Router) {
    super(HOME, "development note");
    new Menus(
      HOME,
      Object.values(routes)
        .map(({ title }) => title)
        .slice(1),
      Router
    );
  }
}
