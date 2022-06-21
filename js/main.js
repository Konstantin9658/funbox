const body = document.querySelector('body');
const cards = body.querySelectorAll('.products__item');
const btnsBuy = body.querySelectorAll('.buy');

const getId = elem => elem.getAttribute('id');

const setDisabled = (item) => {
  if (item.classList.contains('products__item--disabled')) {
    const descr = item.querySelector('.products__item-descr');
    const type = item.querySelector('.products__type').textContent;

    descr.textContent = `Печалька, ${type} закончился.`;
    item.removeEventListener('click', selectedCard);
    // item.removeEventListener('mouseover', )
  }
};

function checkId(card) {
  const descr = card.querySelector('.products__item-descr');

  switch (getId(card)) {
    case 'fuagra':
      return (descr.textContent = 'Печень утки разварная с артишоками.');
    case 'fish':
      return (descr.textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.');
    case 'chicken':
      return (descr.textContent = 'Филе из цыплят с трюфелями в бульоне.');
  }
}

function selectedCard() {
  const descr = this.querySelector('.products__item-descr');
  const slogan = this.querySelector('.products__slogan');

  slogan.textContent = 'Сказочное заморское яство';
  slogan.style.color = '#666666';

  this.classList.toggle('products__item--selected');

  if (this.classList.contains('products__item--selected')) {
    checkId(this);
  } else {
    descr.innerHTML = `Чего сидишь? Порадуй котэ, <a href="#!" class="buy">купи</a><span>.</span>`;
  }
}

cards.forEach(card => card.addEventListener('click', selectedCard));
cards.forEach(card => setDisabled(card));

cards.forEach(card => card.addEventListener('mouseenter', () => {
  if (card.classList.contains('products__item--selected')) {
    const slogan = card.querySelector('.products__slogan');

    slogan.textContent = 'Котэ не одобряет?';
    slogan.style.color = '#e52e7a';
  }
}));
