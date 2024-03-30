export const likedContent = [];

export const getGanre = async function (motion) {
  try {
    const getHTTP = await fetch(
      `https://api.tvmaze.com/search/shows?q=${motion}`
    );
    const getFilm = await getHTTP.json();
    return getFilm;
  } catch {
  
  }
};
