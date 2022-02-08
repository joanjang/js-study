import routes from "./routes";
import { isProdMode, BASE_SRC } from "../utility";

export default class Router {
  constructor() {
    this.routes = routes;
  }

  initialRoute() {
    this.router(this.routes["/"]);

    window.addEventListener("popstate", () => {
      this.router(this.routes["/"]);
    });
  }

  goToPage(path, Router) {
    const { origin } = location;

    if (!path.startsWith("/")) path = "/" + path;
    history.pushState({}, "", `${origin}${isProdMode ? BASE_SRC : ""}${path}`);
    Router.router(Router.routes[path]);
  }

  router(route) {
    const { title, class: Page } = route;
    return new Page(title, title === "home" ? this : undefined);
  }
}
