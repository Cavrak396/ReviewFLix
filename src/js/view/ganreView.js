import View from "./view.js";

class GanreView extends View {
  closeBtn;

  _generateGanre(data) {
    const markup = `
        <section class="ganre js-ganre">
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
         <button type="button" class="ganre__close-btn js-close-ganre">
         <img src="images/close.png" alt="close image" class="ganre-closeImg">
         </button> 
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
         <div class="ganre__recommendations">
         <span class="ganre__recommendations-tag"> You might like this too </span>
          <div class="ganre__recommendations-recommended">
          ${this._getRecommendations(data)}
          </div>
         </div>
        </div>
        </div>
        </div>
        </section>
        `;

    this.banner.insertAdjacentHTML("afterbegin", markup);
    this.closeBtn = document.querySelector(".js-close-ganre");
    this._closeGanre();
  }

  _getRecommendations(data) {
    return `
      <ul class="ganre__recommendations-list">
        ${data
          .map((dataItem) => {
            const imageUrl =
              dataItem.show &&
              dataItem.show.image &&
              dataItem.show.image.original
                ? dataItem.show.image.original
                : "images/default-image-url.jpg";
            const ratingAverage =
              dataItem.show &&
              dataItem.show.rating &&
              dataItem.show.rating.average
                ? dataItem.show.rating.average
                : "N/A";
            const premieredYear =
              dataItem.show && dataItem.show.premiered
                ? dataItem.show.premiered.slice(0, 4)
                : "N/A";

            return `<li class="ganre__recommendations-item">
              <a href="${
                dataItem.show.name
              }" class="ganre__recommendations-link"> 
                <div class="ganre__recommendations-image" style="background-image: url('${imageUrl}')"></div>
                <div class="ganre__recommendations-text">
                  <div class="ganre__recommendations-subtitle"> 
                    <span class="ganre__recommendations-average">
                      <img src="images/star.png" alt="star image" class="ganre__recommendations-star">
                      <span class="ganre__recommendations-rating">${ratingAverage}</span>
                    </span>
                    <span class="ganre__recommendations-date">${premieredYear}</span>
                  </div>
                  <div class="ganre__recommendations-description">
                    <h3 class="ganre__recommendations-title">${
                      dataItem.show.name
                    }</h3>
                    <span class="ganre__recommendations-about">
                    ${
                      dataItem.show && typeof dataItem.show.summary === "string"
                        ? dataItem.show.summary.length > 100
                          ? dataItem.show.summary.slice(0, 100) + "..."
                          : dataItem.show.summary
                        : "This content has not description."
                    }
                  </span>
                  </div>
                </div>
              </a>
            </li>`;
          })
          .slice(1)
          .join("")}
      </ul>
    `;
  }

  _closeGanre() {
    this.closeBtn.addEventListener("click", () => {
      this.closeBtn.closest(".js-ganre").remove();
    });
  }
}

export default new GanreView();
