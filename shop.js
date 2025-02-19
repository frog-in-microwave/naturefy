
const products_list = [
  {
    "id": 0,
    "name": "Summit Xplorer Tent",
    "picture_url": "product_pictures/tent1.jpg",
    "price": 149.99,
    "description": "Durable and lightweight for extreme weather conditions.",
    "in_stock": true,
    "material": "Weather-resistant fabric",
    "manufacturer": "Summit Gear",
    "warranty": "1 year",
    "return_policy": "30-day return policy"
  },
  {
    "id": 1,
    "name": "EcoTrail Ultralight Tent",
    "picture_url": "product_pictures/tent2.jpg",
    "price": 129.99,
    "description": "Compact and weatherproof for efficient trail packing.",
    "in_stock": true,
    "material": "Ultra-light polyester",
    "manufacturer": "EcoTrail",
    "warranty": "2 years",
    "return_policy": "30-day return policy"
  },
  {
    "id": 2,
    "name": "TerraPeak Expedition Backpack 45L",
    "picture_url": "product_pictures/bag1.jpg",
    "price": 199.99,
    "description": "High-capacity with ergonomic support for long treks.",
    "in_stock": true,
    "material": "Durable nylon",
    "manufacturer": "TerraPeak",
    "warranty": "3 years",
    "return_policy": "30-day return policy"
  },
  {
    "id": 3,
    "name": "WildTrack Nomad Daypack",
    "picture_url": "product_pictures/bag2.jpg",
    "price": 89.99,
    "description": "Compact and lightweight for everyday hiking needs.",
    "in_stock": true,
    "material": "Water-resistant polyester",
    "manufacturer": "WildTrack",
    "warranty": "1 year",
    "return_policy": "30-day return policy"
  },
  {
    "id": 4,
    "name": "AquaFlow Thermal Bottle 1L",
    "picture_url": "product_pictures/bottle1.jpg",
    "price": 39.99,
    "description": "Double-walled to keep your drinks hot or cold for hours.",
    "in_stock": true,
    "material": "Stainless steel",
    "manufacturer": "AquaFlow",
    "warranty": "1 year",
    "return_policy": "30-day return policy"
  },
  {
    "id": 5,
    "name": "HydraPeak Adventure Bottle 750ml",
    "picture_url": "product_pictures/bottle2.jpg",
    "price": 34.99,
    "description": "Leak-proof design for outdoor adventures.",
    "in_stock": true,
    "material": "BPA-free plastic",
    "manufacturer": "HydraPeak",
    "warranty": "1 year",
    "return_policy": "30-day return policy"
  },
  {
    "id": 6,
    "name": "TrailBlazer Trekking Boots",
    "picture_url": "product_pictures/boots1.jpg",
    "price": 179.99,
    "description": "Waterproof and rugged for extreme hiking conditions.",
    "in_stock": true,
    "material": "Leather and rubber",
    "manufacturer": "TrailBlazer",
    "warranty": "2 years",
    "return_policy": "30-day return policy"
  },
  {
    "id": 7,
    "name": "PeakVent Trail Boots",
    "picture_url": "product_pictures/boots2.jpg",
    "price": 159.99,
    "description": "Breathable design with superior ankle support.",
    "in_stock": true,
    "material": "Synthetic mesh and rubber",
    "manufacturer": "PeakVent",
    "warranty": "1 year",
    "return_policy": "30-day return policy"
  },
  {
    "id": 8,
    "name": "RockGuard Alpine Boots",
    "picture_url": "product_pictures/boots3.jpg",
    "price": 199.99,
    "description": "Built to withstand icy and rocky terrains.",
    "in_stock": true,
    "material": "Gore-Tex fabric and rubber",
    "manufacturer": "RockGuard",
    "warranty": "3 years",
    "return_policy": "30-day return policy"
  },
  {
    "id": 9,
    "name": "SwissBlade Original Pocket Knife",
    "picture_url": "product_pictures/knife2.jpg",
    "price": 49.99,
    "description": "Original hand-crafted Swiss knife.",
    "in_stock": true,
    "material": "Stainless steel",
    "manufacturer": "SwissBlade",
    "warranty": "Lifetime",
    "return_policy": "30-day return policy"
  },
  {
    "id": 10,
    "name": "TrekBlade Multi-Tool Pocket Knife",
    "picture_url": "product_pictures/knife1.jpg",
    "price": 59.99,
    "description": "Versatile tool with 10 essential functions.",
    "in_stock": true,
    "material": "Stainless steel",
    "manufacturer": "TrekBlade",
    "warranty": "Lifetime",
    "return_policy": "30-day return policy"
  },
  {
    "id": 11,
    "name": "AdventureEdge Survival Pocket Knife",
    "picture_url": "product_pictures/knife3.jpg",
    "price": 69.99,
    "description": "Heavy-duty design for survival situations.",
    "in_stock": true,
    "material": "Carbon steel",
    "manufacturer": "AdventureEdge",
    "warranty": "Lifetime",
    "return_policy": "30-day return policy"
  },
  {
    "id": 12,
    "name": "SurvivePro Ultimate Survival Kit",
    "picture_url": "product_pictures/survival_kit.jpg",
    "price": 129.99,
    "description": "All-in-one kit for emergency outdoor situations.",
    "in_stock": true,
    "material": "Mixed materials",
    "manufacturer": "SurvivePro",
    "warranty": "1 year",
    "return_policy": "30-day return policy"
  },
  {
    "id": 13,
    "name": "CampFire Compact Stove",
    "picture_url": "product_pictures/stove.jpg",
    "price": 89.99,
    "description": "Efficient and lightweight for quick meal preparation.",
    "in_stock": true,
    "material": "Stainless steel",
    "manufacturer": "CampFire",
    "warranty": "2 years",
    "return_policy": "30-day return policy"
  },
  {
    "id": 14,
    "name": "EverFrost Winter Jacket",
    "picture_url": "product_pictures/jacket1.jpg",
    "price": 229.99,
    "description": "Insulated for maximum warmth in freezing temperatures.",
    "in_stock": true,
    "material": "Down insulation",
    "manufacturer": "EverFrost",
    "warranty": "3 years",
    "return_policy": "30-day return policy"
  },
  {
    "id": 15,
    "name": "TrailLite All-Season Jacket",
    "picture_url": "product_pictures/jacket2.jpg",
    "price": 189.99,
    "description": "Versatile design with breathable and waterproof layers.",
    "in_stock": true,
    "material": "Polyester and nylon",
    "manufacturer": "TrailLite",
    "warranty": "2 years",
    "return_policy": "30-day return policy"
  },
  {
    "id": 16,
    "name": "StormGuard Extreme Jacket",
    "picture_url": "product_pictures/jacket3.jpg",
    "price": 249.99,
    "description": "Built to withstand heavy rain and wind.",
    "in_stock": true,
    "material": "Gore-Tex fabric",
    "manufacturer": "StormGuard",
    "warranty": "3 years",
    "return_policy": "30-day return policy"
  },
  {
    "id": 17,
    "name": "EcoHike Lightweight Jacket",
    "picture_url": "product_pictures/jacket4.jpg",
    "price": 179.99,
    "description": "Lightweight and packable for spontaneous weather changes.",
    "in_stock": true,
    "material": "Nylon",
    "manufacturer": "EcoHike",
    "warranty": "1 year",
    "return_policy": "30-day return policy"
  },
  {
    "id": 18,
    "name": "PeakTrail Waterproof Pants",
    "picture_url": "product_pictures/pants1.jpg",
    "price": 129.99,
    "description": "Durable and waterproof for rugged adventures.",
    "in_stock": true,
    "material": "Polyester",
    "manufacturer": "PeakTrail",
    "warranty": "2 years",
    "return_policy": "30-day return policy"
  },
  {
    "id": 19,
    "name": "FlexTrek Convertible Pants",
    "picture_url": "product_pictures/pants2.jpg",
    "price": 119.99,
    "description": "Convertible design for hot and cold weather.",
    "in_stock": true,
    "material": "Stretch fabric",
    "manufacturer": "FlexTrek",
    "warranty": "2 years",
    "return_policy": "30-day return policy"
  },
  {
    "id": 20,
    "name": "RockFit Hiking Pants",
    "picture_url": "product_pictures/pants3.jpg",
    "price": 99.99,
    "description": "Stretchable and reinforced for ultimate comfort.",
    "in_stock": true,
    "material": "Reinforced fabric",
    "manufacturer": "RockFit",
    "warranty": "1 year",
    "return_policy": "30-day return policy"
  },
  {
    "id": 21,
    "name": "TimberEdge Woodcutter Axe",
    "picture_url": "product_pictures/axe.jpg",
    "price": 149.99,
    "description": "Precision-crafted for wood chopping in the wild.",
    "in_stock": true,
    "material": "Carbon steel",
    "manufacturer": "TimberEdge",
    "warranty": "Lifetime",
    "return_policy": "30-day return policy"
  },
  {
    "id": 22,
    "name": "TimberEdge Hand Axe",
    "picture_url": "product_pictures/axe2.jpg",
    "price": 149.99,
    "description": "Compact and durable, perfect for precision chopping and carving.",
    "in_stock": true,
    "material": "Carbon steel",
    "manufacturer": "TimberEdge",
    "warranty": "Lifetime",
    "return_policy": "30-day return policy"
  },
  {
    "id": 23,
    "name": "LumeBright LED Camping Lantern",
    "picture_url": "product_pictures/lantern.jpg",
    "price": 59.99,
    "description": "Bright and durable with adjustable lighting modes.",
    "in_stock": true,
    "material": "Aluminum and plastic",
    "manufacturer": "LumeBright",
    "warranty": "2 years",
    "return_policy": "30-day return policy"
  }
]

  









let items_in_cart = JSON.parse(localStorage.getItem("items_in_cart")) || [];

localStorage.setItem("items_in_cart" , JSON.stringify(items_in_cart));
// localStorage.clear();


generate_shopping_cards(products_list);


document.getElementById("full_screen_product_exit").addEventListener("click" , () => {
  document.getElementById("fullscreen_products_container").style.display = "none";
})









function generate_shopping_cards(products_list){
    for(let i = 0; i < products_list.length; i++){
      let product = products_list[i];
      document.getElementById("products").innerHTML += `
        <div onclick="display_product_discription(event , ${product.id})" class="hiking_card" class="card text-center">
          <img style="object-position: center;" src="${product.picture_url}" class="card_image card-img-top" alt="Hiking Item">
          <div class="card_body card-body">
              <h5 class="card_title card-title">${product.name}</h5>
              <p class="card_description card-text">${product.description}</p>
              <p class="card_price text-success fw-bold">${product.price}</p>
              <a class="card_button btn btn-primary btn-sm" onclick="add_to_cart(${product.id})">Add to Cart</a>
          </div>
      </div>
      `;

    }
  }
  

function display_product_discription(event , id) {
  if(!event.target.classList.contains("btn")){
    product = products_list[id];
    document.getElementById("fullscreen_products_container").style.display = "flex";
    document.getElementById("full_screen_product_title").innerHTML = product.name;
    document.getElementById("full_screen_product_image").src = product.picture_url;
    document.getElementById("full_screen_product_discription").innerHTML = `Discription : ${product.description}`;
    document.getElementById("full_screen_product_discription_material").innerHTML = `Material : ${product.material}`;
    document.getElementById("full_screen_product_discription_manufacturer").innerHTML = `Manufacturer : ${product.manufacturer}`;
    document.getElementById("full_screen_product_discription_warranty").innerHTML = `Warenty : ${product.warranty}`;
    document.getElementById("full_screen_product_discription_return_policy").innerHTML = `Return Polacy :${product.return_policy}`;
    
    if(product.in_stock){
      document.getElementById("full_screen_product_discription_in_stock").innerHTML = `In Stock`;
      document.getElementById("full_screen_product_discription_in_stock").classList += "good";
    }
    else{
      document.getElementById("full_screen_product_discription_in_stock").innerHTML = `Out ofStock`;
      document.getElementById("full_screen_product_discription_in_stock").classList += "bad";
    }


    document.getElementById("full_screen_product_add_to_cart").addEventListener("click" , add_to_cart(product.id));
  }
}






function add_to_cart(id) {
    let product = products_list[id];
    let is_added = false;
    for(let i = 0; i < items_in_cart.length; i++){
        if(id == items_in_cart[i].id){
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
    update_local_storage();

}





function update_local_storage(){
    localStorage.setItem("items_in_cart" , JSON.stringify(items_in_cart));
}