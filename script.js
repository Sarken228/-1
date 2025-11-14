document.getElementById('applyFilter')?.addEventListener('click', () => {
  const genre = genreFilter.value;
  const price = +priceFilter.value || Infinity;

  document.querySelectorAll('.game-card').forEach(card => {
    const show = (genre === 'all' || card.dataset.genre === genre) && card.dataset.price <= price;
    card.style.display = show ? 'block' : 'none';
  });
});

let cart = 0;
const cartEl = Object.assign(document.createElement('div'), { id: 'cartCount', textContent: 0 });
document.body.append(cartEl);

function showToast(msg) {
  const t = Object.assign(document.createElement('div'), { className: 'toast', textContent: msg });
  document.body.append(t);
  setTimeout(() => t.classList.add('show'), 100);
  setTimeout(() => t.remove(), 2800);
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('buy-btn')) {
    cartEl.textContent = ++cart;
    showToast(' Игра добавлена в корзину');
  }
});