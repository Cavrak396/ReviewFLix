import View from "./view.js";

class BookmarksView extends View {
  deleteBtn;

  _handleLikes(storage) {
    this.likedBtn.addEventListener("click", () => {
      const name = this.likedBtn
        .closest(".js-ganre")
        .querySelector(".js-ganre-name").textContent;

      const genres = this.likedBtn
        .closest(".js-ganre")
        .querySelector(".js-genres").textContent;

      const webChannel = this.likedBtn
        .closest(".js-ganre")
        .querySelector(".js-webchannel").textContent;

      const description = this.likedBtn
        .closest(".js-ganre")
        .querySelector(".js-text").textContent;

      const contentImage = this.likedBtn
        .closest(".js-ganre")
        .querySelector(".js-film-image").style.backgroundImage;

      const imageUrl = contentImage.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
      console.log(genres);

      const markup = `
            <li class="header__liked-item js-boomark"> 
            <img src="${imageUrl}" alt="film image" class="header__liked-image">
            <div class="header__liked-text">
            <h3 class="header__liked-name">${name}</h3>
            <span class="header__liked-genres">${genres.slice(8)}</span>
            <p class="header__liked-lines">${description.slice(0, 34)}...</p>
            <span class="header__liked-webchannel" style="color:${
              webChannel.slice(13) === "Netflix" ? "red" : "orange"
            }">${webChannel.slice(12)}</span>
            </div>
            <button type="button" class="header__liked-closer js-delete-btn">
            <img src="images/close.png" class="header__liked-closeImg" alt="close image"> 
            </button>
            </li>
            `;

      this.likedList.insertAdjacentHTML("beforeend", markup);
    });
  }

  _deleteBookmark() {
    console.log("aaaa"); // Check letter
  }
}

export default new BookmarksView();
