
const URLparams = new URLSearchParams(window.location.search);
const category = URLparams.get("category");


fetch("https://kea-alt-del.dk/t7/api/products?category="+ category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  // console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
    copy.querySelector("h3").textContent=product.productdisplayname;
    if(product.soldout){
        //produktet er udsolgt
        copy.querySelector("article").classList.add("soldOut")
    }
    //send fra readmore til korrekt produkt id
    copy.querySelector(".readmore").setAttribute("href", `product.html?id=${product.id}`)
    //ændre billede
    copy.querySelector(
        "img"
    ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

    //append
  document.querySelector("main").appendChild(copy);
}

/*
        <article class="smallProduct">
          <a href="product.html">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
              alt="Sahara Team India Fanwear Round Neck Jersey"
            />
          </a>
          <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
          <p class="subtle">Tshirts | Nike</p>
          <p class="price"><span>Prev.</span> DKK 1595,-</p>
          <div class="discounted">
            <p>Now DKK 1560,-</p>
            <p class="percent">-34%</p>
          </div>
          <a class="readmore" href="product.html">Read More</a>
        </article>



{
    "id": 1165,
    "gender": "Men",
    "category": "Apparel",
    "subcategory": "Topwear",
    "articletype": "Tshirts",
    "season": "Summer",
    "productionyear": 2013,
    "usagetype": "Sports",
    "productdisplayname": "Mean Team India Cricket Neck Jersey",
    "price": 2495,
    "discount": 45,
    "brandname": "Nike",
    "soldout": 0
}

*/
