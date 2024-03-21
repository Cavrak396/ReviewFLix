import * as model from "./model.js";
import effectsView from "./view/effectsView.js";
import searchView from "./view/searchView.js";
import ganreView from "./view/ganreView.js";

const handleGanre = async function () {
  try {
    const searchResult = await searchView._getSearch();
    const ganre = await model.getGanre(searchResult);
    ganreView._generateGanre(ganre);  
    console.log(ganre);
  } catch {}
};

const handleEffect = function () {
  effectsView._activateSearch();
  effectsView._focusSearch();
  effectsView._generateInformations();
};

handleGanre();
handleEffect();
