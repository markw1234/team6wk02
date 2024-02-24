import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";
//import { setLocalStorage, getLocalStorage } from "./utils.mjs";     //temporary

loadHeaderFooter();

productList(".product-list", "tents");
//setLocalStorage("so-cart", "");                                     //temporary
