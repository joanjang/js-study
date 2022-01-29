import "../../scss/index.scss";
import Page from "../core/Page";
import titleList from "../../../titleList";

export default class Home extends Page {
  constructor() {
    super("home", "Development Note");
  }

  subRendering() {
    return `<ul>
      ${titleList
        .map((title) => `<li class="titleList" title=${title}>${title}</li>`)
        .join("")}
    </ul>`;
  }
}
