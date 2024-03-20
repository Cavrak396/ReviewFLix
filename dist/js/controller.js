import * as model from "./model.js";
import effectsView from "./view/effectsView.js";
import searchView from "./view/searchView.js";

const handleGanre = async function () {
  try {
    const ganre = await model.getGanre();
  } catch {}
};

const handleEffect = function () {
  effectsView._activateSearch();
  effectsView._focusSearch();
  effectsView._generateInformations();
};

handleGanre();
handleEffect();
