
let namProd, priceProd, disProd, descProd;
function createProd(namProd, priceProd, disProd, descProd) {
    return `
  Name: ${namProd}
  Price: $${priceProd}
  Discount: ${disProd}%
  Price with discount: $${calculateTotalPrice(priceProd, disProd)}
  Price in 12 installments: $${calculateInstalls(priceProd)} monthly
  Product description: ${descProd};
  `
}
function calculateTotalPrice(priceProd, disProd) {
    const totalPrice = priceProd - (priceProd * (disProd / 100));
    return totalPrice;
}
function calculateInstalls(priceProd) {
    const installments = priceProd / 12
    return installments;
}

const mackbook = createProd(
    'Mac', 1200, 20, 'Mackbook M1 re zarpada, comprala'
)
alert(mackbook)