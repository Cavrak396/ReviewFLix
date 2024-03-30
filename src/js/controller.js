import * as model from "./model.js";
import View from "./view/view.js";
import effectsView from "./view/effectsView.js";
import searchView from "./view/searchView.js";
import ganreView from "./view/ganreView.js";
import bookmarksView from "./view/bookmarksView.js";

const handleGanre = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    const data = await model.getGanre(id);

    ganreView._generateGanre(data, bookmarksView._handleLikes);

    const errorScreen = document.querySelector(".js-banner .js-error-screen");

    if (errorScreen) errorScreen.remove();
  } catch (error) {
    if (error) {
      searchView._showSearchError();
    }
  }
};

const init = function () {
  effectsView._activateSearch();
  effectsView._focusSearch();
  effectsView._generateInformations();
  searchView._getSearch();
  searchView._getHashLocation(handleGanre);
  bookmarksView._showLikedStats();
  // ganreView._handleLikes();
};

init();
