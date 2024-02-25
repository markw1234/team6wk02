import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
//localStorage.clear();
productList(".product-list", "tents");