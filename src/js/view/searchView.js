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

  _showSearchError() {
    const markup = `
    <div class="erorr__screen js-error-screen">
     <div class="error__text-holder">
      <p class="error__developer-message"> Your search for "${window.location.hash.slice(
        1
      )}" did not have any matches.</p>
      <span class="error__suggestions-tag"> Suggestions </span>
      <ul class="error__suggestions-list">
       <li class="error__suggestions-item">1.) Try different keywords.</li>
       <li class="error__suggestions-item">2.) Looking for a film or TV programme?</li>
       <li class="error__suggestions-item">3.) Try using a film, TV programme title, an actor or director.</li>
       <li class="error__suggestions-item">4.) Try a genre, such as comedy, romance, sports or drama.</li>
      </ul>
     </div>
    </div>
    `;

    this.banner.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new SearchView();
