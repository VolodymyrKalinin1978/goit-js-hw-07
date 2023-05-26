import { galleryItems } from "./gallery-items.js";
// Change code below this line
const lightBoxGalleryRef = document.querySelector(".gallery");

const imagesGalery = galleryItems
  .map(
    (el) => `
     <li class="gallery__item">
         <a class="gallery__link" href="${el.original}">
            <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
         </a>
     </li>
  `
  )
  .join("");
lightBoxGalleryRef.insertAdjacentHTML("afterbegin", imagesGalery);
console.log(lightBoxGalleryRef);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  enableKeyboard: true,
});
