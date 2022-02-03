import "../scss/index.scss";

import Router from "./router/Router";
import { BASE_SRC } from "./utility";

window.addEventListener("load", () => {
  const router = new Router();
  let { pathname } = location;

  pathname = pathname.replace(BASE_SRC, "");
  if (pathname === "/" || pathname.includes("index.html"))
    router.initialRoute();
  else router.goToPage(pathname, router);
});
