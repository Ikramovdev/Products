let elProduct = document.querySelector(".product");
let elSearchProduct = document.querySelector(".search-product");

function renderProduct(arr) {
    elProduct.innerHTML = null; // Avvalgi mahsulotlarni tozalash
    arr.forEach(item => {
        let elLiItem = document.createElement("li");
        elLiItem.className = "w-[95%] mx-auto my-[10px] bg-white p-5";
        elLiItem.innerHTML = `
            <div class="text-center">
                <img src="${item.images[0]}" alt="${item.title}" class="mx-auto mb-[10px]" width="70"/>
                <span class="block font-medium text-[20px] mb-[10px]">ID: ${item.id}</span>
                <h2 class="font-semibold mb-[10px]">Name: ${item.title}</h2>
                <p class="text-[13px] mb-2">Description: ${item.description}</p>
                <strong class="text-[20px] text-pink-500">Price: ${item.price}$</strong>
            </div>
            `
        elProduct.appendChild(elLiItem);
    });
}

fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        renderProduct(data.products);
        localStorage.setItem("products", JSON.stringify(data.products));
    });

elSearchProduct.addEventListener("input", function(e) {
    const products = JSON.parse(localStorage.getItem("products"));
    const searchValue = e.target.value.toLowerCase()
    const dataProducts = products.filter(item => item.title.toLowerCase().includes(searchValue));
    renderProduct(dataProducts);
});
