// Add imports above this line
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simple-lightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryEl = document.querySelector('.gallery');
function newGellery(image) {
    return image
        .map(({preview, original, description}) => {
            return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>`
        })
        .join("");
}

galleryEl.insertAdjacentHTML("beforeend", newGellery(galleryItems));

new SimpleLightbox('.gallery a', {
    captinosData: "alt",
    captionsDelay: 250,
});

 console.log(galleryItems);
console.log(galleryItems);
