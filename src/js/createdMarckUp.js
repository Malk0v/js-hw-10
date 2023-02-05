export default function createGalleryMarkup(img) {
  return img
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
      </a>
  </li>`;
    })
    .join('');
}