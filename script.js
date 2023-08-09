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
        );
        let addMore = prompt("¿Deseas agregar otro producto? (si/no)").toLowerCase();
        while (addMore === 'si') {
            let title = prompt("Ingrese el título del producto:");
            let description = prompt("Ingrese la descripción del producto:");
            let price = parseFloat(prompt("Ingrese el precio del producto:"));
            let img = prompt("Ingrese la ruta de la imagen del producto (img/):");

            products.push(createProduct(title, description, price, img));

            addMore = prompt("¿Deseas agregar otro producto? (si/no)").toLowerCase();
        };
    } else {
        alert("Chancho culiao ")
    }
}

let inputUser = prompt("Ingrese su nombre de usuario:");
let inputPassword = prompt("Ingrese su contraseña:");
login(inputUser, inputPassword);

console.log(products);
