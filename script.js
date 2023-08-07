
let numProd, namProd, priceProd, disProd, disPriceProd, descProd;
function createProd(numProd, namProd, priceProd, disProd, twelvesInsPriceProd, descProd){
  return `Product: ${numProd}
  Name: ${namProd}
  Price: ${priceProd}
  Discount: ${disProd}
  Price with discount: ${priceProd-(priceProd*(disProd/100))}
  Price with Installments: ${twelvesInsPriceProd}
  Product description: ${descProd};
  `
}
createProd('1','Mac','60','20','85','pee')
