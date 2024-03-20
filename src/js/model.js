export const getGanre = async function (wicher) {
  try {
    const getHTTP = await fetch(
      `https://api.tvmaze.com/search/shows?q=witcher`
    );
    const getFilm = await getHTTP.json();

    console.log(getFilm);
    return getFilm;
  } catch {}
};
