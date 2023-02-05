export default function clickBody(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
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
}

