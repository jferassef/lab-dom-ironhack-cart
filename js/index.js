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
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  console.log(`hola`);
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  console.log(`hola`, calculatePricesBtn);
  //... your code goes here
});
