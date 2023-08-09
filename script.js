let products = [];

function createProduct(title, description, price, img) {
    let product = {
        title,
        description,
        price,
        img,
    };
    return product;
}

function uploadProducts(product, array) {
    array.push(product);
    return array;
}

function addProduct() {
    let title = prompt("Enter the product title:");
    let description = prompt("Enter the product description:");
    let price = parseFloat(prompt("Enter the product price:"));
    let img = prompt("Enter the product image route (img/):");

    products.push(createProduct(title, description, price, img));
}

function login(user, password) {
    if (user === 'admin' && password === '1234') {
        uploadProducts(
            createProduct('Jordan', 'Jordan 4 Black Cat', 130000, 'img/jordan/4/black-cat.jpg'),
            products
        );
        products.push(
            createProduct('Puma', 'SlipStream Hi Blue', 52000, 'img/puma/slipstream/hi/blue.jpg')
        );

        let addMore = prompt("Do you wish add other product? (y/n)").toLowerCase();
        while (addMore === 'y') {
            addProduct();
            addMore = prompt("Do you wish add other product? (y/n)").toLowerCase();
        }

        if (addMore === "n") {
            console.log(products);
        }
    } else {
        alert("Incorrect credentials");
    }
}

function loginWithRetry(user, password, maxAttempts) {
    let remainingAttempts = maxAttempts;

    while (remainingAttempts > 0) {
        if (user === 'admin' && password === '1234') {
            login(user, password);
            return;
        } else {
            remainingAttempts--;
            alert(`Incorrect credentials. You have ${remainingAttempts} tries left.`);
            user = prompt("Insert your user name:");
            password = prompt("Insert your password:");
        }
    }

    alert("You has exceded the tries, you have been blocked.");
}

const maxLoginAttempts = 3;
let inputUser = prompt("Insert your user name:");
let inputPassword = prompt("Insert your password:");

loginWithRetry(inputUser, inputPassword, maxLoginAttempts);
