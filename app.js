console.log("Let's get this party started!");

const apiKey = "sn5kSYeNgBmu4CfYoZcAhrPq5C7QnKJN";

const form = document.querySelector(".gif-search-form");

const removeButton = document.querySelector(".remove-btn");

// API Request
async function getGif() {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${form.searchInput.value}&api_key=${apiKey}`,{
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

// Listen for submit
form.addEventListener("submit", async function(e) {
    e.preventDefault();
    
    let res = await getGif(); // GET the gif from the Giphy API
    // Create a new img EL and append it to the gif container
    const newImg = document.createElement("img");
    newImg.setAttribute("src", `${res.data.images.downsized_medium.url}`);
    newImg.classList.add("gif");
    const divContainer = document.querySelector(".gif-container");
    divContainer.append(newImg);
    // Clear the form
    form.searchInput.value = "";

});

// Remove all gifs when clicked
removeButton.addEventListener("click", function() {
  // Get array of all the gifs
  let allGifs = document.querySelectorAll(".gif");
  // Loop over and delete them all
  for(let gif of allGifs) {
    gif.remove();
  }
})

