import ROUTES from "./routes";
import { isProdMode, BASE_SRC } from "../utility";

export default class Router {
  constructor() {
    this.routes = ROUTES;
    this.initialRoute();
  }

  initialRoute() {
    this.router(this.routes["/"], this.routes);

    window.addEventListener("popstate", () => {
      this.router(this.routes["/"], this.routes);
    });
  }

  goToPage(pathname, Router) {
    if (!pathname.startsWith("/")) pathname = "/" + pathname;
    history.pushState({}, "", `${isProdMode ? BASE_SRC : ""}${pathname}`);
    Router.router(Router.routes[pathname]);
  }

  router(Page, routes) {
    Page = Page.class;
    routes ? new Page(routes, this) : new Page();
  }
}
