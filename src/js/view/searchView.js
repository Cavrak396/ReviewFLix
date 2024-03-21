import View from "./view.js";

class SearchView extends View {
  _getSearch() {
    return new Promise((resolve, reject) => {
      this.searchField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          const searchResult = this.searchField.value;
          resolve(searchResult);
          this.searchField.value = "";
        }
      });
    });
  }
}

export default new SearchView();
