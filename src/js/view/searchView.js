import View from "./view.js";

class SearchView extends View {
  _getSearch() {
    this.searchField.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const film = this.searchField.value;
        window.location.hash = film;
        this.searchField.value = "";
      }
    });
  }

  _getHashLocation(handler) {
    ["hashchange", "load"].forEach((event) => {
      window.addEventListener(event, handler);
    });
  }
}

export default new SearchView();
