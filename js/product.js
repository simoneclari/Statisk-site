
const URLparams = new URLSearchParams(window.location.search);
const id = URLparams.get("id");


fetch("https://kea-alt-del.dk/t7/api/products/" + id)
.then((response)=> response.json())
.then((data) => showProduct(data));

function showProduct(product) {
    console.log(product);
    document.querySelector(".purchaseBox h3").textContent =
    product.productdisplayname;
    document.querySelector(".purchaseBox .brand").textContent = product.brandname;
    document.querySelector(".info .model").textContent = product.variantname;
    document.querySelector(".info .color").textContent = product.colour1;
    document.querySelector(".info .id-number").textContent = product.id;
    document.querySelector(".info .brand-details").textContent = product.brandbio;
    document.querySelector(
        "img"
    ).src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
}



/*
    <section class="info">
      <h2>Product Information</h2>
      <dl>
        <dt>Model name</dt>
        <dd class="model">Model details</dd>
        <dt>Color</dt>
        <dd class="color" >Blue</dd>
        <dt>Inventory number</dt>
        <dd class="id-number">ID</dd>
      </dl>
      <h2>Brand</h2>
      <p class="brand-details" >Brand details</p>
    </section>
*/





// const url = `https://kea-alt-del.dk/t7/api/products${id}`;

// function getProduct() {
//     fetch(url)
//     .then((response) => response.json())
//     .then(showProduct);
// }

// function showProduct(product) {
//     document.querySelector(".purchaseBox h3").textContent = produkt.productdisplayname;
//     document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
//     document.querySelector("img").alt = produkt.productdisplayname;
// }

// getProduct();