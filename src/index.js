console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", function() {
    fetchImages();
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

// loadBreeds options - function with a fetch request
// updateBreedList function 
// removeChildren function
// addingTheBreed function
// updateCollar function
// selectBreedsStartingWith function
// addBreedsSelectListener function