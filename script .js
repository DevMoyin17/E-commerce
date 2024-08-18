let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: "Waffle with Berries",
        tag: "waffle",
        price: 6.50,
        inCart: 0
    },
    {
        name: "Vanilla Bean Creme Brulee",
        tag: "vanilla",
        price: 7.00,
        inCart: 0
    },
    {
        name: "Macaron Mix of Five",
        tag: "macaron",
        price: 8.00,
        inCart: 0
    },
    {
        name: "Classic Tiramisu",
        tag: "tiramisu",
        price: 4.00,
        inCart: 0
    },
    {
        name: "Pistachio Baklava",
        tag: "pistachio",
        price: 4.00,
        inCart: 0
    },
    {
        name: "Lemon Meringue Pie",
        tag: "lemon pie",
        price: 5.00,
        inCart: 0
    },
    {
        name: "Red Velvet Cake",
        tag: "red velvet",
        price: 4.50,
        inCart: 0
    },
    {
        name: "Caramel Brownie",
        tag: "brownie",
        price: 5.50,
        inCart: 0
    },
    {
        name: "Vanilla Panna Cotta",
        tag: "vanilla cotta",
        price: 6.50,
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        CartsNumber(products[i]);
        totalCost(products[i])
    });
}

// function reFresh() {
//     let ProductNumber = localStorage.getItem('CartsNumber');
//     if (ProductNumber) {
//         document.querySelector('.cart span').textContent = ProductNumber;
//     }
// }

function CartsNumber(product) {
    let ProductNumber = localStorage.getItem('CartsNumber');
    ProductNumber = parseInt(ProductNumber);

    if (ProductNumber) {
        localStorage.setItem('CartsNumber', ProductNumber + 1);
        document.querySelector('.cart span').textContent = ProductNumber + 1;
    } else {
        localStorage.setItem('CartsNumber', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems[product.tag] = product;
            cartItems[product.tag].inCart = 1;
        } else {
            cartItems[product.tag].inCart += 1;
        }
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        };
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    }else{
        
        localStorage.setItem("totalCost", product.price);  
    }
    

    // if (cartCost) {
    //     cartCost += product.price;
    // } else {
    //     cartCost = product.price;
    // }

}