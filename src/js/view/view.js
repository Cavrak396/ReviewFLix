export default class View {
  banner = document.querySelector(".js-banner");
  bannerGanre = document.querySelector(".js-banner__ganre");
  searchField = document.querySelector(".js-search");
  searchBtn = document.querySelector(".js-searchBtn");
  likedList = document.querySelector(".js-bookmarks-list");
  ganreCloseBtn;
  likedBtn;
  bookmarksMessage = document.querySelector(".js-bookmark-message");

  _loadingScreen() {
    const markup = `
    <div class="loading__screen js-loading-screen">
    <span class="loading__spinner">
    <div class="loading__spinner-hole"></div>
    </span>
    </div>
    `;

    this.banner.insertAdjacentHTML("afterbegin", markup);

    setTimeout(() => {
      const spinner = document.querySelector(".js-loading-screen");
      if (spinner) {
        spinner.remove();
      }
    }, 500);
  }
}
