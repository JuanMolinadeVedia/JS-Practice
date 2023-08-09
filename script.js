let products = [];

function createProduct(title, description, price, img) {
    let product = {
        title,
        description,
        price,
        img,
    };
    return product;
};

function uploadProducts(product, array) {
    array.push(product);
    return array;
}

let admin = { name: 'admin', admin: true };

function login(user, password) {
    if ( user === 'admin' && password === '1234') {

        uploadProducts(
            createProduct('Jordan', 'Jordan 4 Black Cat', 130000, 'img/jordan/4/black-cat.jpg'),
            products
        );
        products.push(
            createProduct('Puma', 'SlipStream Hi Blue', 52000, 'img/puma/slipstream/hi/blue.jpg')
        )

    } else {
        alert("Chancho culiao ")
    }
}

let inputUser = prompt("Ingrese su nombre de usuario:");
let inputPassword = prompt("Ingrese su contraseña:");
login(inputUser, inputPassword);

console.log(products);
