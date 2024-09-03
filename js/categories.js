fetch("https://kea-alt-del.dk/t7/api/categories")
.then(res=>res.json())
.then(showCategories)

function showCategories(cats){
    cats.forEach(showCategory)
}
function showCategory(cat){
    //fanger template
    const template = document.querySelector("template").content;
    //kloner
    const clone = template.cloneNode(true);
    //ændrer indhold
    clone.querySelector("a").textContent=cat.category;
    clone.querySelector("a").href= `productlist.html?category=${cat.category}`;
    //append
    document.querySelector(".letterGroup ol").appendChild(clone);
}


/*
[
  {
    "category": "Accessories"
  },
  {
    "category": "Apparel"
  },
  {
    "category": "Footwear"
  },
  {
    "category": "Free Items"
  },
  {
    "category": "Personal Care"
  },
  {
    "category": "Sporting Goods"
  }
]
*/