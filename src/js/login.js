import { loadHeaderFooter, getParam} from "./utils.mjs";

loadHeaderFooter();

const redirect = getParam("redirect");

document.querySelector("#login_btn").addEventListener(click, ()=>{
    const email = document.querySelector("#userName").value;
    const password = document.querySelector("#pwd").value;
    login({ email, password }, redirect);

});
