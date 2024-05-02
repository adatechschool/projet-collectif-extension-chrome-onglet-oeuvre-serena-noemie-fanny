//let images = ["/Users/fanny/Documents/ADA/projet-collectif-extension-chrome-onglet-oeuvre-serena-noemie-fanny/images/photo1.jpg","/Users/fanny/Documents/ADA/projet-collectif-extension-chrome-onglet-oeuvre-serena-noemie-fanny/images/photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg"];

// const randomImage = document.createElement("images") + images[Math.floor(Math.random() * images.length)];

// const image = document.createElement("img");
// image.src = "./images/EllenvonUnwerth.jpg";
// document.body.appendChild(image);

// function imageRandom(){
   
//     let maDiv = document.getElementById('mainImage');
//     let monImage = document.createElement('img');
//     monImage.src = images;

//     for (let i = 0; i < images.length; i++) {
//         document.createElement(images[i]);

//     maDiv.appendChild(monImage)
//     }
// }

//imageRandom()

let maDiv = document.getElementById('mainImage');

maDiv.innerHTML="<img src=\"./images/photo"+ Math.floor((Math.random()*5)+1)+".jpg\"/>"