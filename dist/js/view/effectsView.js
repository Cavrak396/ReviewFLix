import View from "./view.js";

class EffectsView extends View {
  searchSign = document.querySelector(".js-searchSign");
  infoBtn = document.querySelector(".js-info-btn");
  closeCloudBtn;
  cloud;

  _activateSearch() {
    this.searchBtn.addEventListener("click", () => {
      this.searchField.classList.toggle("activate-input");
    });
  }

  _focusSearch() {
    this.searchSign.addEventListener("click", () => {
      this.searchField.classList.toggle("activate-input");
      this.searchField.focus();
    });
  }

  _createInformations() {
    const markup = `
    <div class="banner__informations-blur js-cloud">
    <div class="banner__informations">
    <button type="button" class="banner__informations-close js-close-cloud"> 
    <img src="images/close.png" alt="close image" class="banner__informations-closeImg">
    </button>
    <div class="banner__video-holder">
    <video control autoplay muted loop src="images/info-video.mp4" class="banner__info-video"></video>
    <div class="banner__video-text"> 
    <h2 class="banner__video-title"> What is the <span class="banner__text-decoration">purpose</span> of the application? </h2>
    </div>
    </div>
    <div class="banner__informations-text">
    <span class="banner__informations-task"> Stay up to date with ganre trends.</span>
    <p class="banner__informations-lines">
    In our application, we've designed a special feature to keep you up to date with the latest genre trends. Our team regularly monitors dynamic changes in the world of TV shows, allowing you to explore and stay informed about the newest genre trends. Whether you prefer action, comedy, drama, or any other genre, our application enables you to stay ahead, discovering new favorite series and future hits in the entertainment world. With our genre trends tracking feature, your viewing experience will be enriched, and you'll always be in the know about what's popular and trending.
    </p>
    <span class="banner__informations-task">Where idea comes from?</span>
    <p class="banner__informations-lines ">
    I wanted to share a bit about the app I've been working on. It all started from my love for different genres and the idea of making it easier for my friends and I to find great shows and movies.
    As a student in IT, I saw an opportunity to create something useful and fun. So, I decided to build an app that would help us stay up to date with genre trends and discover new content effortlessly.
    It's been a journey of learning and dedication, but I'm proud of what I've accomplished. Now, my friends and I have a handy tool to explore our favorite genres and never miss out on what's trending.
    I'm excited to see where this project goes and how it helps us all discover awesome new entertainment together.
    Thanks for your support!
    </p>
    </div>
    <div class="banner__informations-developer">
     <img class="banner__informations-image" alt="developer image" src="images/profile-photo-color.jpg"> 
     <span class="banner__informations-name"> Marko Cavrak </span>
    </div>
    </div>
    `;

    this.banner.insertAdjacentHTML("afterbegin", markup);
    this.closeCloudBtn = document.querySelector(".js-close-cloud");
    this.cloud = document.querySelector(".js-cloud");
    this.cloud.style.overflow = "auto";
    this._closeInformations();
  }

  _generateInformations() {
    this.infoBtn.addEventListener("click", () => {
      this._createInformations();
    });
  }

  _closeInformations() {
    this.closeCloudBtn.addEventListener("click", () => {
      this.cloud.remove();
    });
  }
}

export default new EffectsView();
