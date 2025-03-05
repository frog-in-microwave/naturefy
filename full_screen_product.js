



//simple loader
window.onload = function(){
    document.getElementById("preloader").style.display = "none";
  };
  








/* The code snippet you provided is retrieving a product object from the browser's local storage,
parsing it from a JSON string format to a JavaScript object, and then displaying the product
description on the webpage using the `display_product_discription` function. Finally, it logs the
product object to the console for debugging purposes. */

let product = JSON.parse(localStorage.getItem("full_screen_product"));
display_product_discription(product);
console.log(product);

/* This code snippet is adding an event listener to the element with the ID
"full_screen_product_add_to_cart". When this element is clicked, the function inside the arrow
function will be executed. */
document.getElementById("full_screen_product_add_to_cart").addEventListener("click" , () => {
    let items_in_cart = JSON.parse(localStorage.getItem("items_in_cart")) || [];
    add_to_cart(product);

})





/**
 * The function `add_to_cart` adds a product to the shopping cart stored in the browser's local
 * storage, updating the quantity if the product is already in the cart.
 * @param product - The `product` parameter in the `add_to_cart` function represents an object that
 * contains information about a product that a user wants to add to the shopping cart. It typically
 * includes the following properties:
 */
function add_to_cart(product) {
    let items_in_cart = JSON.parse(localStorage.getItem("items_in_cart"));
    let is_added = false;
    for(let i = 0; i < items_in_cart.length; i++){
        if(product.id == items_in_cart[i].id){
            is_added = true;
            items_in_cart[i].quantity++;
            break;
        }
    }
    if(!is_added){
        items_in_cart.push({
            "id": product.id,
            "name": product.name,
            "picture_url": product.picture_url,
            "price": product.price,
            "quantity": 1,
        });
    }
    localStorage.setItem("items_in_cart" , JSON.stringify(items_in_cart));

}

/**
 * The function `display_product_discription` updates the HTML elements with information about a
 * product, including its name, image, description, price, material, manufacturer, warranty, return
 * policy, and stock availability.
 * @param product - The `display_product_discription` function takes a `product` object as a parameter.
 * The `product` object should have the following properties:
 */

function display_product_discription(product) {
    document.getElementById("full_screen_product_title").innerHTML = product.name;
    document.getElementById("full_screen_product_image").src = product.picture_url;
    document.getElementById("full_screen_product_discription").innerHTML = `<span class="popup_lable">Discription : </span>${product.description}`;
    document.getElementById("full_screen_product_discription_price").innerHTML = `<span class="popup_lable">Price : </span><span class="popup_price">$${product.price}</span>`;
    document.getElementById("full_screen_product_discription_material").innerHTML = `<span class="popup_lable">Material : </span>${product.material}`;
    document.getElementById("full_screen_product_discription_manufacturer").innerHTML = `<span class="popup_lable">Manufacturer : </span>${product.manufacturer}`;
    document.getElementById("full_screen_product_discription_warranty").innerHTML = `<span class="popup_lable">Warenty : </span>${product.warranty}`;
    document.getElementById("full_screen_product_discription_return_policy").innerHTML = `<span class="popup_lable">Return Polacy : </span>${product.return_policy}`;
    
    if(product.in_stock){
    document.getElementById("full_screen_product_discription_in_stock").innerHTML = `In Stock`;
    document.getElementById("full_screen_product_discription_in_stock").classList += "good";
    }
    else{
    document.getElementById("full_screen_product_discription_in_stock").innerHTML = `Out ofStock`;
    document.getElementById("full_screen_product_discription_in_stock").classList += "bad";
    }


}