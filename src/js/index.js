import menuItems from './menu.json';
const menuRef = document.querySelector('.js-menu');
const refs = {
  schemaTheme: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

//==== dark theme ====//

refs.schemaTheme.addEventListener('click', changeTheme);

function changeTheme() {
  refs.body.classList.toggle('dark-theme');
}

//==== hbs =====//

const menuMarkup = menuItems
  .map(({ image, name, price, description, ingredients }) => {
    return `<li class="menu__item">
  <article class="card">
    <img src="${image}" alt="${name}" class="card__image"/>
    <div class="card__content">
      <h2 class="card__name">${name}</h2>
      <p class="card__price">
        ${price}  ye
      </p>

      <p class="card__descr"> ${description}</p>

      <ul class="tag-list">
        
        <li class="tag-list__item"> ${ingredients} </li >
       
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>В корзину
    </button>
  </article>
</li>`;
  })
  .join('');

  const ingredient = menuItems => {
    menuItems
      .map(ingredient => {
        return `<li class="tag-list__item"> ${ingredient} </li >`;
      })
      .join('');
  };


menuRef.insertAdjacentHTML('beforeend', menuMarkup);
