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
    tabImg[1]  = "./images/photo2.jpeg";
    tabImg[2]  = "./images/photo3.jpg";
    tabImg[3]  = "./images/photo4.jpeg";
    tabImg[4]  = "./images/photo5.jpg";
    tabImg[5]  = "./images/photo6.jpg";
    tabImg[6]  = "./images/photo7.jpg";
    tabImg[7]  = "./images/photo8.jpeg";
    tabImg[8]  = "./images/photo9.jpg";
    tabImg[9]  = "./images/photo10.jpg";
    tabImg[10]  = "./images/photo11.jpg";
    tabImg[11]  = "./images/photo12.jpg";
    tabImg[12]  = "./images/photo13.jpg";
    tabImg[13]  = "./images/photo14.jpg";
    tabImg[14]  = "./images/photo15.jpg";
    tabImg[15]  = "./images/photo16.jpeg";
  
    let tabLegend = new Array();
    tabLegend[0]  = "Description 1";
    tabLegend[1]  = "Description 2";
    tabLegend[2]  = "Description 3";
    tabLegend[3]  = "Description 4";
    tabLegend[4]  = "Description 5";
    tabLegend[5]  = "Description 6";
    tabLegend[6]  = "Description 7";
    tabLegend[7]  = "Description 8";
    tabLegend[8]  = "Description 9";
    tabLegend[9]  = "Description 10";
    tabLegend[10]  = "Description 11";
    tabLegend[11]  = "Description 12";
    tabLegend[12]  = "Description 13";
    tabLegend[13]  = "Description 14";
    tabLegend[14]  = "Description 15";
    tabLegend[15]  = "Description 16";
   
  
  
    let n = Math.round(Math.random()*15);
  
    document.getElementById('mainImage').src += tabImg[n];
    document.getElementById('legend').innerHTML = tabLegend[n];

}
randomImg();