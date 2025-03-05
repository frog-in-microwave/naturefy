


//simple loader
window.onload = function(){
    document.getElementById("preloader").style.display = "none";
  };
  




/* The line `let items_in_cart = JSON.parse(localStorage.getItem("items_in_cart")) || [];` is
performing the following tasks: */

let items_in_cart = JSON.parse(localStorage.getItem("items_in_cart")) || [];

/* The code `localStorage.setItem("items_in_cart" , JSON.stringify(items_in_cart));
display_cart_items(items_in_cart);` is performing two main tasks: */
localStorage.setItem("items_in_cart" , JSON.stringify(items_in_cart));
display_cart_items(items_in_cart);




/**
 * The function `display_cart_items` dynamically generates and displays cart items in a table format
 * with options to update quantity, calculate subtotal, and remove items.
 * @param items_in_cart - An array containing objects representing items in the shopping cart. Each
 * object should have the following properties:
 */
function display_cart_items(items_in_cart) {
    document.getElementById("item_adittion_zone").innerHTML = ``;
    for(item of items_in_cart){
        document.getElementById("item_adittion_zone").innerHTML += `
            <tr id="product${item.id}">
                <td data-label="Product"><img src="${item.picture_url}" alt="Product 1" class="product-image"></td>
                <td data-label="Name">${item.name}</td>
                <td data-label="Price">$${item.price}</td>
                <td><input data-label="Quantity" class="quantity" type="number" value="${item.quantity}" min="1"></td>
                <td data-label="Subtotal" id="subtotal${item.id}">$${item.quantity * item.price}</td>
                <td><button data-label="Action" onclick="delete_me('product${item.id}')" class="remove-item">Remove</button></td>
            </tr>
        `;
    }
    document.getElementById("item_adittion_zone").addEventListener("input" , function(event){
        change_quantity(event.target.parentNode.parentNode.id);
        change_subtotal(event.target.parentNode.parentNode.id);
        update_cart_summary();
    })
    update_cart_summary();
}


/**
 * The function `change_quantity` updates the quantity of an item in the cart based on user input.
 * @param id - The `id` parameter in the `change_quantity` function is the identifier of the product
 * whose quantity is being changed. It is used to locate the specific item in the `items_in_cart` array
 * and update its quantity based on the value entered in the corresponding input field.
 */
function change_quantity(id){
    for(let i = 0; i < items_in_cart.length; i++){
        if(id.replace("product" , "") == items_in_cart[i].id){
            items_in_cart[i].quantity = parseInt(document.getElementById(id).querySelector("input").value);
            update_local_storage();
            break;
        }
    }
}





/**
 * The function `update_local_storage` stores the `items_in_cart` array in the browser's local storage
 * as a JSON string.
 */
function update_local_storage(){
    localStorage.setItem("items_in_cart" , JSON.stringify(items_in_cart));
}



/**
 * The function `change_subtotal` calculates and updates the subtotal for a specific item in the cart
 * based on its quantity and price.
 * @param id - The `id` parameter in the `change_subtotal` function is used to identify the specific
 * product in the cart for which the subtotal needs to be updated.
 */
function change_subtotal(id){
    for(let i = 0; i < items_in_cart.length; i++){
        if(id.replace("product" , "") == items_in_cart[i].id){
            let subtotal = items_in_cart[i].quantity * items_in_cart[i].price;
            document.getElementById(`subtotal${id.replace("product" , "")}`).innerHTML = `$${subtotal.toFixed(2)}`;
            break;
        }
    }
}

/**
 * The function `delete_me` removes an item from the `items_in_cart` array based on the `parent_id`
 * provided.
 * @param parent_id - The `parent_id` parameter in the `delete_me` function seems to represent the ID
 * of a product that needs to be deleted from the `items_in_cart` array. The function loops through the
 * `items_in_cart` array, finds the item with a matching ID (after removing the "product
 */
function delete_me(parent_id){
    for(let i = 0; i < items_in_cart.length; i++){
        if(parent_id.replace("product" , "") == items_in_cart[i].id){
            items_in_cart.splice(i , 1);
            update_local_storage();
            display_cart_items(items_in_cart);
            break;
        }
    }
}


/**
 * This JavaScript function calculates the total cost of items in a shopping cart and updates the cart
 * summary display.
 * @returns The `update_cart_summary` function is returning a string that represents the total amount
 * of money in the cart, formatted with a dollar sign and two decimal places.
 */
function update_cart_summary() {
    let total = 0;
    for(let i = 0; i < items_in_cart.length; i++){
        total += items_in_cart[i].price * items_in_cart[i].quantity;
    }
    document.getElementById("total_money").innerHTML = ` $${total.toFixed(2)}`;
    return ` $${total.toFixed(2)}`;
}



/* The code snippet you provided is adding an event listener to the `DOMContentLoaded` event. This
event is fired when the initial HTML document has been completely loaded and parsed, without waiting
for stylesheets, images, and subframes to finish loading. */
document.addEventListener("DOMContentLoaded" , () => {
    let items = JSON.stringify(items_in_cart);
    document.getElementById("items_in_form").value = items;
    document.getElementById("total_form").value = update_cart_summary();
})



/* The code snippet you provided is adding an event listener to the form element with the id
"cart_form". When the form is submitted, the arrow function inside the event listener is executed. */

document.getElementById("cart_form").addEventListener("submit" , () => {
    items_in_cart = [];
    update_local_storage();
    display_cart_items();
})



/* The code snippet you provided is adding an event listener to the element with the id
"checkout_button". When the "checkout_button" is clicked, the function inside the arrow function
will be executed. */

document.getElementById("checkout_button").addEventListener("click" , () => {
    document.getElementById("cart_form").style.display = "block";
})