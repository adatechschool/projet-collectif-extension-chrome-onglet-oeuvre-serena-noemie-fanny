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

//let maDiv = document.getElementById('mainImage');


photoRandom= Math.floor((Math.random()*16)+1)
  
let legendDictionnary = {
    1 : ["Imogen Cunningham  ", "Two Callas ", "vers 1925 (Dulwich Picture Gallery, Londres, Royaume-Uni)"],
    2 : ["Romina Ressia ", "Double Bubble Gum ", "2014 (Hofa Gallery)"],
    3 : ["Romina Ressia ", "Coke", "2014"],
    4 : ["Louise Dahl", "Model Mary Jane Russell ", "1949 (Center for Creative Photography, Arizona Board of Regents)"],
    5 : ["Annie Leibovitz ", "Christo, Central Park, New York City, 1981 (Art Institute Chicago)"],
    6 : ["Alice Austen ", "Trude & I, Masked, Short Skirts ", "1891 (Alice Austen Photograph Collection, Courtesy of the Staten Island Historical Society)"],
    7 : ["Alice Austen ", "The Darned Club ", "1891 (Alice Austen Photograph Collection. Courtesy of the Staten Island Historical Society)"],
    8 : ["Alice Austen ", "Group Apparatus ", "1893 (Trivium Art History)"],
    9 : ["Anna Atkins, Polypodium crenatum, Norvège, 1854. Cyanotype, 32.9 x 23.6 cm (Musée des beaux-arts du Canada)"],
    10 : ["Anna Atkins, Hyminophyllum Sunbridgense, vers 1850, cyanotype, 20,5 x 11,8 cm (Musée d’Orsay)"],
    11 : ["Gertrud Arndt ", "Autoportrait dans l’atelier ", "1926 (Bauhaus Archiv Berlin)"],
    12 : ["Marta Astfalck-Vietz ", "Danse expérimentale ", "1931 (Landesmuseum für Moderne Kunst, Fotografie und Architektur)"],
    13 : ["Romina Ressia ", "Fisheye ", "2014 "],
    14 : ["Romina Ressia ", "Popcorn ", "2014 (Columbus Museum of Art, USA)"],
    15 : ["Trude Fleischmann ", "The dancer Tilly Losch ", "Vienna, 1922-25"],
    16 : ["Lise Sarfati ", "Dierdre # 20, Oakland, Califonia ", "2005 (Lise Sarfati / Magnum Photos)"],
    17 : ["Trude Fleischmann ", "The dancer Tilly Losch ", "Vienna, 1922-25"],
    18 : ["Shirin Neshat ", "Speechless, from the series Women of Allah ", "1996 (Shirin Neshat, courtesy Gladstone Gallery, New York and Brussels)"]

    //maDiv.innerHTML="<img src=\"./images/photo"+ Math.floor((Math.random()*15)+1)+".jpg\"/>"
}

document.getElementById('mainImage').innerHTML += "<img src=\"./images/photo"+ photoRandom+".jpg\"/>"

document.getElementById('legend').innerHTML += legendDictionnary[photoRandom]

//randomImg();