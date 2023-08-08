// class Auto {
//     constructor(name, price, type, kms) {
//         this.name = name
//         this.price = price
//         this.type = type
//         this.kms = kms
//     }
// }
// let listProduct = [];

// const bmw = new Auto(
//     'BMW E46 M3', 29990, "sedan", 506
// )
// const mercedes_benz = new Auto(
//     'mercedes_benz', 1539050, "fastback", 106
// )
// const audi = new Auto(
//     'audi', 158600, "sedan", 5843
// )
// listProduct.push(bmw)
// listProduct.push(mercedes_benz)
// listProduct.push(audi)
// console.log(listProduct)


function createAuto(name, price, type, kms) {
    return {
        name: name,
        price: price,
        type: type,
        kms: kms
    };
}

let listProduct = [];

const bmw = createAuto(
    'BMW E46 M3', 29990, "sedan", 506
);
const mercedes_benz = createAuto(
    'mercedes_benz', 1539050, "fastback", 106
);
const audi = createAuto(
    'audi', 158600, "sedan", 5843
);

listProduct.push(bmw);
listProduct.push(mercedes_benz);
listProduct.push(audi);

console.log(listProduct);
