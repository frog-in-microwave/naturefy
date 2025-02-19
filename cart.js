

let items_in_cart = JSON.parse(localStorage.getItem("items_in_cart")) || [];

localStorage.setItem("items_in_cart" , JSON.stringify(items_in_cart));
// localStorage.clear();
display_cart_items(items_in_cart);




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


function change_quantity(id){
    for(let i = 0; i < items_in_cart.length; i++){
        if(id.replace("product" , "") == items_in_cart[i].id){
            items_in_cart[i].quantity = parseInt(document.getElementById(id).querySelector("input").value);
            update_local_storage();
            break;
        }
    }
}





function update_local_storage(){
    localStorage.setItem("items_in_cart" , JSON.stringify(items_in_cart));
}



function change_subtotal(id){
    for(let i = 0; i < items_in_cart.length; i++){
        if(id.replace("product" , "") == items_in_cart[i].id){
            let subtotal = items_in_cart[i].quantity * items_in_cart[i].price;
            document.getElementById(`subtotal${id.replace("product" , "")}`).innerHTML = `$${subtotal.toFixed(2)}`;
            break;
        }
    }
}

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


function update_cart_summary() {
    let total = 0;
    for(let i = 0; i < items_in_cart.length; i++){
        total += items_in_cart[i].price * items_in_cart[i].quantity;
    }
    document.getElementById("total_money").innerHTML = ` $${total.toFixed(2)}`;
    return ` $${total.toFixed(2)}`;
}



document.addEventListener("DOMContentLoaded" , () => {
    let items = JSON.stringify(items_in_cart);
    document.getElementById("items_in_form").value = items;
    document.getElementById("total_form").value = update_cart_summary();
})

document.getElementById("cart_form").addEventListener("submit" , () => {
    items_in_cart = [];
    update_local_storage();
    display_cart_items();
})

document.getElementById("checkout_button").addEventListener("click" , () => {
    document.getElementById("cart_form").style.display = "block";
})