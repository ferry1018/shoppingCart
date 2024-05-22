const products = [];
const cart = [];
let totalPaid = 0;

function createProducts() {
    const product1 = {
        name: "Cherry",
        price: 2.00,
        quantity: 0,
        productId: 100,
        image: "images/cherry.jpg"
    };
    const product2 = {
        name: "Orange",
        price: 3.00,
        quantity: 0,
        productId: 101,
        image: "images/orange.jpg"
    };
    const product3 = {
        name: "Strawberry",
        price: 4.00,
        quantity: 0,
        productId: 102,
        image: "images/strawberry.jpg"
    };

    products.push(product1, product2, product3);
}

function addProductToCart(productId) {
    const product = products.find(p => p.productId === productId);
    if (product) {
        const cartItem = cart.find(item => item.productId === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
    }
}

function increaseQuantity(productId) {
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
        cartItem.quantity++;
    }
}

function decreaseQuantity(productId) {
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
        cartItem.quantity--;
        if (cartItem.quantity === 0) {
            removeProductFromCart(productId);
        }
    }
}

function removeProductFromCart(productId) {
    const cartIndex = cart.findIndex(item => item.productId === productId);
    if (cartIndex > -1) {
        cart.splice(cartIndex, 1);
    }
}

function cartTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function pay(amount) {
    totalPaid += amount;
    const total = cartTotal();
    const difference = totalPaid - total;

    return difference;
}

// Initialize the products
createProducts();

