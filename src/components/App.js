import "styles/App.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

/**
 * Container for the application
 */
export default class App {
  /**
   * Create the App and render it's children
   * @param {HTMLElement} rootElement - The root element for all components
   */
  constructor(rootElement) {
    this._root = rootElement;
    this.render();
  }

  /**
   * Render elements to the DOM
   */
  render() {
    this._root.className = "app";

    const sidebar = new Sidebar();

    const pageContainer = document.createElement("div");
    pageContainer.className = "page";

    const header = new Header();
    const content = new Content();

    pageContainer.appendChild(header.getElement());
    pageContainer.appendChild(content.getElement());

    this._root.appendChild(sidebar.getElement());
    this._root.appendChild(pageContainer);

    // Detecting scroll and calling Shrink header function
    pageContainer.onscroll = ()=> {
      if (pageContainer.scrollTop > 50){
        header.shrinkHeader();
      }
      else{
        header.unShrinkHeader();
      }
    };

    // Toggle sidebar
    pageContainer.children[0].children[0].addEventListener('click', () => { 
      // Toggle bar
      sidebar.sidebarToggle();

      // Animate Burger
      pageContainer.children[0].children[0].classList.toggle('toggle');

      // Animate Margin
      this._root.classList.toggle('marginToggle');
    });
  }
}
