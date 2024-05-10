
photoRandom= Math.floor((Math.random()*30)+1)
  
let legendDictionnary = {
    1 : ["Imogen Cunningham", " Two Callas", " vers 1925 (Dulwich Picture Gallery, Londres, Royaume-Uni)"],
    2 : ["Romina Ressia", " Double Bubble Gum", " 2014 (Hofa Gallery)"],
    3 : ["Julia Margaret Cameron", " Vivien and Merlin", " 1874 (David Hunter McAlpin Fund)"],
    4 : ["Louise Dahl", " Model Mary Jane Russell", " 1949 (Center for Creative Photography, Arizona Board of Regents)"],
    5 : ["Annie Leibovitz", " Christo, Central Park, New York City", " 1981 (Art Institute Chicago)"],
    6 : ["Alice Austen", " Trude & I, Masked, Short Skirts", " 1891 (Alice Austen Photograph Collection, Courtesy of the Staten Island Historical Society)"],
    7 : ["Alice Austen", " The Darned Club", " 1891 (Alice Austen Photograph Collection. Courtesy of the Staten Island Historical Society)"],
    8 : ["Alice Austen", " Group Apparatus", " 1893 (Trivium Art History)"],
    9 : ["Anna Atkins", " Polypodium Crenatum", " Norvège, 1854", " cyanotype, 32.9 x 23.6 cm (Musée des beaux-arts du Canada)"],
    10 : ["Anna Atkins", " Hyminophyllum Sunbridgense", " vers 1850", " cyanotype, 20,5 x 11,8 cm (Musée d’Orsay)"],
    11 : ["Gertrud Arndt", " Autoportrait dans l’atelier", " 1926 (Bauhaus Archiv Berlin)"],
    12 : ["Marta Astfalck-Vietz", " Danse expérimentale", " 1931 (Landesmuseum für Moderne Kunst, Fotografie und Architektur)"],
    13 : ["Romina Ressia", " Fisheye", " 2014"],
    14 : ["Dora Maar (Henriette Théodora Markovitch, dite)", " Sans titre (Main-coquillage)", " 1934 (Centre Pompidou)"],
    15 : ["Trude Fleischmann ", " The dancer Tilly Losch", " Vienna, 1922-25"],
    16 : ["Sophie Calle", " Les Dormeurs", " 1979 (Courtesy Perrotin)"],
    17 : ["Shirin Neshat", " Speechless, from the series Women of Allah", " 1996 (Shirin Neshat, courtesy Gladstone Gallery, New York and Brussels)"],
    18 : ["Berenice Abbott", " Grand Central Station New York City", " 1929 (Moma, New-York)"],
    19 : ["Berenice Abbott", " Canyon : Broadway and Exchange Place, Manhattan", " 1936 (Moma, New-York)"],
    20 : ["Ninagawa Mika", " « Untitled »from the series Utsurundesu", " 2018-19 (Ninagawa Mika)"],
    21 : ["Hiromix", " Seventeen Girl Days", " 1995 (Abe Books)"],
    22 : ["Cindy Sherman", " Untitled", " 2023 (Courtesy the artist and Hauser & Wirth Publishers)"],
    23 : ["Cindy Sherman", " Untitled", " 1981 (Cindy Sherman/Courtesy of Christie's)"],
    24 : ["Graciela Iturbide", " Procesión", " 1984 (Cortesía Palacio de Cultura Citibanamex)"],
    25 : ["Graciela Iturbide", " Nuestra señora de las iguanas", " 1979 (Cortesía Palacio de Cultura Citibanamex-Palacio de Iturbide)"],
    26 : ["Graciela Iturbide", " Magnolia", " 1986 (Fundación MAPFRE)"],
    27 : ["Delphine Diaw Diallo", " Seventeen Girl Days", " 1995 (Abe Books)"],
    28 : ["Chen Man", " Funky Greatwall", " 1995 (Abe Books)"],
    29 : ["Lebohang Kganye", " Ka 2 phisi yaka e pinky II, from the series: Ke Lefa Laka: Her-Story", " 2013 (Courtesy: AFRONOVA GALLERY, Johannesburg)"],
    30 : ["Zanele Muholi", " Aphelile IV, Durban", " 2020 (Courtesy of the artist. Yancey Richardson Gallery, New York and Stevenson Gallery, Cape Town/Johannesburg)"]
}

document.getElementById('icones').innerHTML += "<img src=\"./icons/frida2.svg\"/>"

document.getElementById('mainImage').innerHTML += "<img src=\"./images/photo"+ photoRandom+".jpg\"/>"

document.getElementById('legend1').innerHTML += legendDictionnary[photoRandom][0]+","+legendDictionnary[photoRandom][2]

document.getElementById('legend').innerHTML += legendDictionnary[photoRandom][1]

function initHeureLocale(){
    let date = new Date;
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
  
    // Creation d'un objet aiguilles dans lequelle on indique chaque type d'aiguille avec l'angle associé
    let hands = [
      {
        hand: 'hours',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        angle: (minutes * 6)
      },
      {
        hand: 'seconds',
        angle: (seconds * 6)
      }
    ];
    // boucle qui parcourt l'objet aiguilles et chaque indice de l'objet est stocké dans la variable élément et lié à un sélecteur CSS .heures, .minutes ou .secondes
    for (let j = 0; j < hands.length; j++) {
      let elements = document.querySelectorAll('.' + hands[j].hand);
      for (var k = 0; k < elements.length; k++) { // dans l'objet élément, on parcours chaque indice et on lui applique le calcul de l'angle de l'objet hand
          elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';//code pour Safari pour chaque valeur de élément on applique la propriété css style.transform et rotate  selon l'angle indiqué dans l'objet. 
          elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';// code pour tous les autres navigateurs.
          // If this is a minute hand, note the seconds position (to calculate minute position later)
          if (hands[j].hand === 'minutes') {
            elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
          }// s'il s'agit d'une minute, alors il ira chercher l'angle des secondes de l'objet hands.
      }
    }
  }
initHeureLocale();

// permet de convertir l'heure dans l'angle des aiguilles correspondants. Elle fait une boucle sur chaque aiguille lui donne le bon angle par les proprietes style.transform et rotateZ


  