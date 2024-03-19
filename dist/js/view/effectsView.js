class EffectsView {
  searchField = document.querySelector(".js-search");
  searchBtn = document.querySelector(".js-searchBtn");
  searchSign = document.querySelector(".js-searchSign");

  _activateSearch() {
    this.searchBtn.addEventListener("click", () => {
      this.searchField.classList.toggle("activate-input");
    });
  }

  _focusSearch() {
    this.searchSign.addEventListener("click", () => {
      this.searchField.classList.toggle("activate-input");
    });
  }
}

export default new EffectsView();
