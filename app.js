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

function randomImg(){
    let tabImg = new Array();
    tabImg[0]  = "./images/photo1.jpg";
    tabImg[1]  = "./images/photo2.jpg";
    tabImg[2]  = "./images/photo3.jpg";
    tabImg[3]  = "./images/photo4.jpg";
    tabImg[4]  = "./images/photo5.jpg";
  
    let tabLegend = new Array();
    tabLegend[0]  = "7. Alice Austen - The Darned Club, 1891 (Alice Austen Photograph Collection. Courtesy of the Staten Island Historical Society)";
    tabLegend[1]  = "Description 2";
    tabLegend[2]  = "Description 3";
    tabLegend[3]  = "Description 4";
    tabLegend[4]  = "Description 5";
  
  
    let n = Math.round(Math.random()*4);
  
    document.getElementById('mainImage').src += tabImg[n];
    document.getElementById('legend').innerHTML = tabLegend[n];

}
randomImg();