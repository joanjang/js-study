import ROUTES from "./routes";
import { isProdMode, BASE_SRC } from "../utility";

export default class Router {
  constructor() {
    this.routes = ROUTES;
  }

  initialRoute() {
    this.router(this.routes["/"], this.routes);

    window.addEventListener("popstate", () => {
      this.router(this.routes["/"], this.routes);
    });
  }

  goToPage(pathname, Router) {
    const { origin } = location;

    if (!pathname.startsWith("/")) pathname = "/" + pathname;
    history.pushState(
      {},
      "",
      `${origin}${isProdMode ? BASE_SRC : ""}${pathname}`
    );
    Router.router(Router.routes[pathname]);
  }

  router(Page, routes) {
    Page = Page.class;
    routes ? new Page(routes, this) : new Page();
  }
}
