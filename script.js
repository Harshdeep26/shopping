// Sample product data
const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 1200, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Headphones", category: "electronics", price: 150, image: "https://via.placeholder.com/150" },
    { id: 3, name: "T-Shirt", category: "clothing", price: 25, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Smartphone", category: "electronics", price: 800, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Jeans", category: "clothing", price: 40, image: "https://via.placeholder.com/150" },
];

let cartCount = 0;

// Function to display products
function displayProducts(productList) {
    const container = document.getElementById("products-container");
    container.innerHTML = ""; // Clear previous items

    productList.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;

        container.appendChild(productCard);
    });
}

// Function to handle category filtering
document.getElementById("categoryFilter").addEventListener("change", function () {
    const selectedCategory = this.value;
    if (selectedCategory === "all") {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === selectedCategory);
        displayProducts(filteredProducts);
    }
});

// Function to handle sorting by price
document.getElementById("priceSort").addEventListener("change", function () {
    const sortBy = this.value;
    let sortedProducts = [...products];

    if (sortBy === "lowToHigh") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(sortedProducts);
});

// Function to handle add to cart
function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

// Initial Display of Products
displayProducts(products);
