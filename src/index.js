console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const breedContainer = document.querySelector("#dog-breeds")
const breedDropdown = document.querySelector("#breed-dropdown")
let breedsArray = []

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

breedDropdown.addEventListener("change", eventChange => {
    const letter = eventChange.target.value
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    breedContainer.innerHTML = ''
    filteredBreeds.forEach(breed => {
        const newElement= document.createElement("li")
        newElement.innerText = breed
        breedContainer.appendChild(newElement)
    });
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
            breedsArray = Object.keys(breeds.message)
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