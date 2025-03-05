

// unwanted taxon ids (snails spiders ...)
const excludedTaxa = [47158, 47119, 48460, 372739, 116551, 48731, 55524];









//simple loader  but in awaits the fetchingof both the plants and animals.
window.onload = async function(){
  await start();
  document.getElementById("preloader").style.display = "none";
};
















start_plant_spotlight();

/**
 * The function `start_plant_spotlight` fetches a list of plants, selects a random plant from the list,
 * and displays information about the selected plant.
 */
async function start_plant_spotlight() {
  let plant_array = await fetch_plants();
  if (plant_array.length === 0) {
    console.log("No plants found, trying again...");
    start_plant_spotlight();
  } else {
    let spotlighted_plant = await get_random_plant(plant_array);
    await display_spotlighted_plant(spotlighted_plant);
  }
}



// filling up the plant containers

async function display_spotlighted_plant(plant) {
  if (plant.preferred_common_name != null) {
    document.getElementById("spotlighted_plant_name").innerHTML = `The ${plant.preferred_common_name} (${plant.name})`;
  } else {
    document.getElementById("spotlighted_plant_name").innerHTML = `${plant.name}`;
  }

  document.getElementById("spotlighted_plant_scientific_name").innerHTML = `Scientific Name: ${plant.name}`;
  document.getElementById("spotlighted_plant_status").innerHTML = plant.extinct ? `Extinct` : `Not Extinct`;
  document.getElementById("spotlighted_plant_status").className = plant.extinct ? "bad" : "good";
  document.getElementById("spotlighted_plant_times_noticed").innerHTML = `${plant.observations_count}`;

  document.getElementById("spotlighted_plant_image").src = plant.default_photo.medium_url.replace("medium", "large");
  document.getElementById("spotlighted_plant_description").innerHTML = get_random_plant_description(plant);
}


// deletes the bootstrap spinner that is a sibling element of the image that is right before it

function stop_spinner(element) {
  element.previousElementSibling.style.display = "none";
  element.style.display = "block";
}


// choosing a random plant

function get_random_plant(plant_array) {
  let index = Math.floor(Math.random() * plant_array.length);
  return plant_array[index];
}

//getting a random plant discription

function get_random_plant_description(plant) {
  const plant_descriptions = [
    `The species ${plant.name}, known commonly as ${plant.preferred_common_name}, belongs to the ${plant.rank} rank and has been observed ${plant.observations_count} times on iNaturalist. This plant plays a crucial role in its ecosystem. Learn more on its <a href="${plant.wikipedia_url}">Wikipedia page</a>.`,
    `Did you know that ${plant.name} (aka ${plant.preferred_common_name}) has been observed ${plant.observations_count} times? As a ${plant.rank}, it thrives in specific environments and is an important part of biodiversity. Learn more on its <a href="${plant.wikipedia_url}">Wikipedia page</a>.`,
    `With ${plant.observations_count} observations, ${plant.name} (${plant.preferred_common_name}) showcases its resilience as a species. Discover more on its <a href="${plant.wikipedia_url}">Wikipedia page</a>.`,
    `Exploring ${plant.name}, commonly known as ${plant.preferred_common_name}, reveals its ecological importance. It has been observed ${plant.observations_count} times. Discover more on its <a href="${plant.wikipedia_url}">Wikipedia page</a>.`
  ];
  return plant_descriptions[Math.floor(Math.random() * plant_descriptions.length)];
}


//fetching a random plant page and filtering the plants
async function fetch_plants() {
  const response = await fetch(`https://api.inaturalist.org/v1/taxa?&page=${Math.floor(Math.random() * 330)}`);
  const data = await response.json();
  let plant_list = data.results;
  let plant_array = filter_for_plants(plant_list);
  console.log(plant_array);
  return plant_array;
}



// checking for the plants and returning while also re fetching if non were found
function filter_for_plants(plant_list) {
  let plant_array = [];
  let found_plant = false;
  for (let i = 0; i < plant_list.length; i++) {
    if (plant_list[i].iconic_taxon_name === "Plantae") {
      plant_array.push(plant_list[i]);
      found_plant = true;
    }
  }
  if (!found_plant) {
    fetch_plants();
  }
  return plant_array;
}










// this is where the magic happens
async function start() {
    let animal_array = await fetch_animals();
    if(animal_array.length == 0) {
        console.log("No animals found, trying again...");
        start();
    }
    else{

        let spotlighted_animal = await randomed_animal(animal_array);
        await display_spotlighted_animal(spotlighted_animal);
    }
    }


// filling animakl container
async function display_spotlighted_animal(animal) {
    if(animal.preferred_common_name != null) {
        document.getElementById("spotlighted_animal_name").innerHTML = `The ${animal.preferred_common_name} (${animal.name})`;
    }
    else {
        document.getElementById("spotlighted_animal_name").innerHTML = `${animal.name}`;
    }
    document.getElementById("spotlighted_animal_scientific_name").innerHTML = `Scientific Name : ${animal.name}`;
    if(animal.extinct){
        document.getElementById("spotlighted_animal_status").innerHTML = `Extinct`;
        document.getElementById("spotlighted_animal_status").className = "bad";
    }
    else {
        document.getElementById("spotlighted_animal_status").innerHTML = `Not Extinct`;
        document.getElementById("spotlighted_animal_status").className = "good";
    }

    document.getElementById("spotlighted_animal_times_noticed").innerHTML = `${animal.observations_count}`;
    
    document.getElementById("spotlighted_animal_image").src = animal.default_photo.medium_url.replace("medium", "large");
    document.getElementById("spotlighted_animal_discription").innerHTML = await get_random_discription(animal);
}






function randomed_animal(animal_array) {
    index = Math.floor(Math.random() * animal_array.length);
    return animal_array[index];
}

function get_random_discription(animal){
    let wiki_page = animal.wikipedia_url || `https://en.wikipedia.org/wiki/${animal.name}`;
    let actual_name = animal.preferred_common_name || animal.name;
    const animal_discriptions = [
        `The species ${animal.name}, known commonly as ${actual_name}, belongs to the ${animal.rank} rank and has been observed ${animal.observations_count} times on iNaturalist. This animal plays a crucial role in its ecosystem, contributing to the balance of nature. Learn more about this fascinating species on its <a href="${wiki_page}" target="_blank">Wikipedia page</a>.`,
      
        `Did you know that ${animal.name} (aka ${actual_name}) has been observed ${animal.observations_count} times? As a ${animal.rank}, it thrives in specific environments and is an important part of the biodiversity of the region. Its presence on iNaturalist shows just how widespread and significant it is. Discover more on its <a href="${wiki_page}" target="_blank">Wikipedia page</a>.`,
      
        `The animal ${actual_name} (scientific name: ${animal.name}) is part of the ${animal.rank} family, and is still actively contributing to ecological health. With over ${animal.observations_count} observations, this species showcases its resilience. Find out how this species is doing on iNaturalist and more on its <a href="${wiki_page}" target="_blank">Wikipedia page</a>.`,
      
        `With ${animal.observations_count} recorded observations, the ${animal.name}, also known as ${actual_name}, is a species that's closely monitored by nature enthusiasts. As a member of the ${animal.rank} rank, its ecological role cannot be overstated. Stay updated and explore more about this species through its <a href="${wiki_page}" target="_blank">Wikipedia page</a>.`,
      
        `${animal.name} (the ${actual_name}) is a fascinating species in the ${animal.rank} category, with a record of ${animal.observations_count} observations on iNaturalist. It serves as a testament to the diversity of our natural world. For further details, visit its <a href="${wiki_page}" target="_blank">Wikipedia page</a> to learn about its characteristics and significance.`,
      
        `As a ${animal.rank} species, ${animal.name} (or ${actual_name}) has earned its place in the wild with ${animal.observations_count} documented sightings. Whether it’s in the wild or protected areas, this species plays a role in maintaining ecological harmony. Read more about it on its <a href="${wiki_page}" target="_blank">Wikipedia page</a>.`,
      
        `${animal.name}, commonly called ${actual_name}, is an integral part of nature's intricate web. With ${animal.observations_count} recorded observations, it highlights the abundance of life around us. As a ${animal.rank}, its preservation is key to maintaining the health of ecosystems. Learn more by visiting its <a href="${wiki_page}" target="_blank">Wikipedia page</a>.`,
      
        `The ${animal.name}, or ${actual_name}, is classified as a ${animal.rank} rank species and has been observed ${animal.observations_count} times on iNaturalist. Its continued presence indicates the richness of life forms that share our planet. For a deeper dive into its biological traits, visit its <a href="${wiki_page}" target="_blank">Wikipedia page</a>.`,
      
        `Exploring the world of ${animal.name} (also known as ${actual_name}) reveals the marvels of nature. With ${animal.observations_count} observations to date, this species continues to capture the interest of naturalists. As a ${animal.rank}, it represents the fascinating biodiversity we must protect. Check out its details on its <a href="${wiki_page}" target="_blank">Wikipedia page</a>.`,
      
        `The ${animal.name}, known by its common name ${actual_name}, is an essential part of our ecosystem. Having been observed ${animal.observations_count} times, it offers a unique glimpse into the natural world. As a species in the ${animal.rank} family, its conservation is paramount. Discover more about this species on its <a href="${wiki_page}" target="_blank">Wikipedia page</a>.`
      ];
      return animal_discriptions[Math.floor(Math.random() * animal_discriptions.length)];
}
  








async function fetch_animals() {
    const response = await fetch(`https://api.inaturalist.org/v1/taxa?&page=${Math.floor(Math.random() * 330)}`);
    const data = await response.json();
    let creature_list = data.results;
    let animal_array = filter_for_animals(creature_list);
    console.log(animal_array);
    return animal_array;
}

function filter_for_animals(flist) {
    let animal_array = [];
    let found_animal = false;
    for (let i = 0; i < flist.length; i++) {
        if (flist[i].iconic_taxon_name == "Animalia") {
            animal_array.push(flist[i]);
            found_animal = true;
        }
    }
    if(!found_animal) {
        fetch_animals();
    }
    return animal_array;
}






async function city_temp_rn(city_name) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city_name}?unitGroup=metric&key=AXM99KSNCWA792K2UYH5RBPE8&contentType=json`);
    const data = await response.json();
    return data.currentConditions.temp;
}


function aproximate_1900_temp(temp_rn){
    let temp_then = temp_rn - 2;
    return temp_then.toFixed(2);
}

async function start_city_temp(){
    let city_name = sanitize(document.getElementById("city_input").value)
    let temp_rn = await city_temp_rn(city_name);
    let temp_1900 = aproximate_1900_temp(parseFloat(temp_rn));
    
    document.getElementById("city_name").innerHTML = `
        Temp in ${city_name} :
    `;
    document.getElementById("current_temp").innerHTML = `
        Temp now = <span class="bad">${temp_rn}&deg;</span>
    `;
    document.getElementById("before_pollution_temp").innerHTML = `
        Temp in 1900 (before pollution)  &cong; <span class="vgood">${temp_1900}&deg;</span>
    `;
}

function sanitize(string){
    return string.replace(/[""<>'\[\]]/g , " ");
} 

document.getElementById("city_input").addEventListener("keypress" , (event) => {
  if(event.key == "Enter"){
    start_city_temp()
  }
})


document.getElementById("city_input").addEventListener("blur" , () => {start_city_temp()})




















