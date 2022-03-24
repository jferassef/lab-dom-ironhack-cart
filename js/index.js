// ITERATION 1
/**
 *
 * @param {Element} <tr> containg the product
 */
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  });

  // code
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  const priceValue = Number.parseFloat(price.innerText);
  const quantityValue = quantity.value;
  const subtotalValue = priceValue * quantityValue;
  subtotal.innerText = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  const products = document.querySelectorAll('tbody .product');
  let total = document.querySelector('#total-value span');
  let totaln = 0;
  products.forEach((product) => (totaln += Number(updateSubtotal(product))));
  total.innerText = totaln;
  console.log(total);
}

// ITERATION 4

function removeProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  // target = button, parentNode es el td, para remover fila hay que acceder al parentNode del td
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  const tbody = document.querySelector('tbody');
  const template = document.getElementById('template');
  const clone = document.importNode(template.content, true);
  const name = document.querySelector('.create-product > td input');
  const price = document.querySelector(
    '.create-product td:nth-of-type(2) input'
  );
  clone.querySelector('.name span').textContent = name.value;
  clone.querySelector('.price span').textContent = price.value;
  clone.querySelector('.btn-remove').addEventListener('click', removeProduct);
  name.value = '';
  price.value = '';
  tbody.append(clone);
  //... your code goes here
}

window.addEventListener('load', () => {
  console.log(`hola`);
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  console.log(`hola`, calculatePricesBtn);

  //... your code goes here
  document.getElementById('create').addEventListener('click', createProduct);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((butt) => {
    butt.addEventListener('click', removeProduct);
  });
});
