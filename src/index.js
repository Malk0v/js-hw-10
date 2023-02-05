import galleryItems from './js/imageLinks.json';
import { refs as refs } from './js/refs';
// синтаксис что бы переименовать именнованый експорт 
import createModalImg from './js/created_gallery';
import createGalleryMarkup from './js/createdMarckUp';
import createGalleryMarkup from './js/createdMarckUp';

const cardsMarkup = createGalleryMarkup(galleryItems);
refs.body.addEventListener('click', clickBody);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function clickBody(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    console.log('+');
    return;
  }
  refs.modalWindow.classList.toggle('is-open');
  refs.imageContainer.insertAdjacentHTML(
    'beforeend',
    createModalImg(evt.target.dataset.source)
  );
  // console.log(evt.target.dataset.source);
  // console.log(evt.target);
  // console.log(evt.currentTarget);
  // console.log(evt.target.textContent);
  // console.log(evt.target.nodeName);
};

function onCloseModal(e) {
  if (e.target.nodeName !== 'BUTTON') {
    console.log('-');
    return;
  }
  refs.modalWindow.classList.toggle('is-open');
  refs.imageContainer.innerHTML = '';
};