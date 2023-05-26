import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
let instance;
const imagesGalery = galleryItems
  .map(
    (el) => `
      <li class="gallery__item">
      <a class="gallery__link" href="${el.original}">
        <img
          class="gallery__image"
          src="${el.preview}"
          data-source="${el.original}"
          alt="${el.description}"
        />
      </a>
    </li>
  `
  )
  .join("");

function clickOnGallery(event) {
  event.preventDefault();
  let dataSourceImg = event.target.dataset.source;

  onOpenModal(dataSourceImg);
}

function onOpenModal(dataSourceImg) {
  instance = basicLightbox.create(`
<img src="${dataSourceImg}" width="800" height="600">
`);
  instance.show();
  window.addEventListener("keydown", onEscClick);
}

function onEscClick(e) {
  if (e.code !== "Escape") {
    return;
  }
  closeModalWindow();
}

function closeModalWindow() {
  instance.close();
  window.removeEventListener("keydown", onEscClick);
}

galleryRef.insertAdjacentHTML("afterbegin", imagesGalery);

galleryRef.addEventListener("click", clickOnGallery);
console.log(galleryRef);
