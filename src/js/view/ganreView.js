import View from "./view.js";

class GanreView extends View {
  _generateGanre(data) {
    const markup = `
        <section class="ganre">
        <div class="ganre__holder">
        <div class="ganre__line">
        <div class="ganre__image-holder" style="background-image: url('${
          data[0].show.image.original
        }')">

        </div>
        <div class="ganre__review">
         <span class="ganre__review-present"> <span class="ganre__review-decoration">Review</span>Flix present</span>
         <h2 class="ganre__review-ganre">${data[0].show.name}</h2>
         <div class="ganre__review-text">${data[0].show.summary}</div>
         <div class="ganre__review-info"> 
         <ul class="ganre__review-list"> 
         <li class="ganre__review-item"> <span class="genre__review-smooth">Genres:</span> ${data[0].show.genres.join(
           ", "
         )}</li>
         <li class="ganre__review-item"><span class="genre__review-smooth">Rating:</span> ${
           data[0].show.rating.average
         }</li>
          <li class="ganre__review-item"><span class="genre__review-smooth">Language:</span> ${
            data[0].show.language
          }</li>

         </ul>
         <ul class="ganre__review-list"> 
         <li class="ganre__review-item"><span class="genre__review-smooth">Will be next sesoans?:</span> ${
           data[0].show.status === "Running" ? "Yes" : "No"
         }</li>
          <li class="ganre__review-item"><span class="genre__review-smooth">Premiered date:</span> ${
            data[0].show.premiered
          }</li>
          <li class="ganre__review-item"><span class="genre__review-smooth">Web channel:</span> ${
            data[0].show.webChannel.name
          }</li>
         </ul>
         </div>
         <div class="ganre__options"> 
         <a href="${
           data[0].show.officialSite
         }" target="_blank" class="ganre__play-series"> 
         <div class="ganre__play-line">
         <img src="images/play-button.png" alt="play button" class="ganre__option-image">
         <span class="ganre__play-tag"> 
         Watch.
         </span>
         </div>
         </a>
         <button type="button" class="ganre__like-button">
         <img src="images/like.png" class="ganre__like-image" alt="like">
         </button>
         </div>
        </div>
        </div>
        </div>
        </section>
        `;

    this.banner.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new GanreView();
