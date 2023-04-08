// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Change code below this line

// console.log(galleryItems);
fetch('https://pixabay.com/api/?key=34841382-75c0b952d5537088e5e81e69b&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=').then(response => {return response.json().then(({ hits, totalHits }) => {
    this.page += 1;
    return {hits, totalHits}
    })
}).then(({ hits }) => {
    console.log(hits);
    const galleryMarkup = createImgCardMarcup(galleryItems);
    galleryContainer.innerHTML = galleryMarkup;
})

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery');
// const galleryMarkup = createImgCardMarcup(galleryItems);

// galleryContainer.innerHTML = galleryMarkup;

function createImgCardMarcup(array) {
    return array.map(({largeImageURL, webformatURL}) => {
      return`
      <a class="gallery__item" href="${largeImageURL}">
          <img
            class="gallery__image"
            src="${webformatURL}"
            alt=""
          />
      </a>
       `;
    })
        .join("")
};

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
