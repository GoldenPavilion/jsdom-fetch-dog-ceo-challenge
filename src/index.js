console.log('%c HI', 'color: firebrick')
const container = document.querySelector("#dog-image-container");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl).then(function(response){
    return response.json();
}).then (images => {
    const imgs = images.message;
    let imgsArray = imgs.map((image) => {
        let i = `<img scr=${image}>`;
        return i;
    })
    imgsArray.forEach(e =>{
        container.innerHTML += e
    }); 
})