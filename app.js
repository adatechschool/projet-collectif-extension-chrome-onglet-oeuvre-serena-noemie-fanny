
photoRandom= Math.floor((Math.random()*21)+1)
  
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
    19 : ["Berenice Abbott", " Canyon: Broadway and Exchange Place, Manhattan", " 1936 (Moma, New-York)"],
    20 : ["Ninagawa Mika", " « Untitled »from the series Utsurundesu", " 2018-19 (Ninagawa Mika)"],
    21 : ["Hiromix", " Seventeen Girl Days", " 1995 (Abe Books)"],
}
document.getElementById('icones').innerHTML += "<img src=\"./icons/frida2.svg\"/>"

document.getElementById('mainImage').innerHTML += "<img src=\"./images/photo"+ photoRandom+".jpg\"/>"

document.getElementById('legend1').innerHTML += legendDictionnary[photoRandom][0]

document.getElementById('legend').innerHTML += legendDictionnary[photoRandom][1]

document.getElementById('legend1').innerHTML += legendDictionnary[photoRandom][2]

