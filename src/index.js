console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const breedContainer = document.querySelector("#dog-breeds")

document.addEventListener("DOMContentLoaded", function() {
    fetchImages();
    fetchBreeds();
})

breedContainer.addEventListener("click", event => {
    if (event.target.style.color === 'blue'){
        event.target.style.color = 'black'
    } else {
        event.target.style.color = 'blue'
    }
})

function fetchImages(){
    fetch(imgUrl)
        .then((response) => response.json())
        .then (images => {
            images.message.forEach(pic =>addImage(pic) )
    })
}

function addImage(pic){
    const container = document.querySelector("#dog-image-container");
    const newElement = document.createElement("img")
    newElement.src = pic
    container.appendChild(newElement)
}

function fetchBreeds(){
    fetch(breedUrl)
        .then((response) => response.json())
        .then (breeds => {
            const breedsArray = Object.keys(breeds.message)
            addBreeds(breedsArray)
    })
}

function addBreeds(breeds){
    breeds.forEach(breed => {
        const newElement= document.createElement("li")
        newElement.innerText = breed
        breedContainer.appendChild(newElement)
    });
}

// loadBreeds options - function with a fetch request
// updateBreedList function 
// removeChildren function
// addingTheBreed function
// updateCollar function
// selectBreedsStartingWith function
// addBreedsSelectListener function