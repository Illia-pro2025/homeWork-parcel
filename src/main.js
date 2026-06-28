import { products } from "./myModule/products.js";
import templateproduct from "./template/products.hbs";




const productsContainer = document.querySelector("#products-container");

productsContainer.innerHTML = templateproduct({products});
