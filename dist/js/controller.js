import * as model from "./model.js";
import effectsView from "./view/effectsView.js";
import searchView from "./view/searchView.js";
import ganreView from "./view/ganreView.js";
import bookmarksView from "./view/bookmarksView.js";

const handleGanre = async function () {
  try {
    const id = window.location.hash.slice(1);
    const data = await model.getGanre(id);

    if (!id) return;

    ganreView._generateGanre(data, bookmarksView._handleLikes);

    console.log(data);
  } catch (error) {
    console.error("Error fetching genres:", error);
  }
};

const init = function () {
  effectsView._activateSearch();
  effectsView._focusSearch();
  effectsView._generateInformations();
  searchView._getSearch();
  searchView._getHashLocation(handleGanre);
  // ganreView._handleLikes();
};

init();
