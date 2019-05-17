import "styles/Header.css";
import ExportButtons from "./ExportButtons";

/**
 * The page header
 */
export default class Header {
  /**
   * Creates a Header component
   */
  constructor() {
    this._container = document.createElement("div");
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    this._container.className = "header";

    const logoContainer = document.createElement("div");
    logoContainer.className = "logo-container";

    const title = document.createElement("h1");
    title.innerText = "Chuck's Ducks";

    //creating new burger element
    const burger = document.createElement("div");
    burger.className = "burger";
    const line1 = document.createElement("div");
    line1.className = "line1";
    const line2 = document.createElement("div");
    line2.className = "line2";
    const line3 = document.createElement("div");
    line3.className = "line3";

    burger.appendChild(line1);
    burger.appendChild(line2);
    burger.appendChild(line3);

    const exportButtons = new ExportButtons();
    this._container.appendChild(burger);
    this._container.appendChild(logoContainer);
    this._container.appendChild(title);
    this._container.appendChild(exportButtons.getElement());
    this._exportButtons = exportButtons;

    return this._container;
  }

  //Function to change the class from header to header-shrink and hide Export Title
  shrinkHeader () {
    this._container.className = "header-shrink";
    this._exportButtons.removeTitle();
  }

  //Function to change the class from header-shrink to header and un-hide Export Title
  unShrinkHeader () {
    this._container.className = "header";
    this._exportButtons.addTitle();
  }
}
