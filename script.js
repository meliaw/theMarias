// varibales
let contentContainer = document.getElementById("albumContainer");
let rellax;

// database object
let jsonMariasDatabase = [
  {
    "albumArt" : "tmSUPERCLEAN.jpeg",
    "albumName" : "Superclean Vol. I",
    "releaseYear" : "2017",
    "topThree" : ["1. I Don't Know You . . . . . . . . . . ", "2. Only in My Dreams . . . . . . . . ", "3. Basta Ya . . . . . . . . . . . . . . . . . ."],
    "streamLink" : "https://open.spotify.com/album/5XX1xVOP61GDQCGaZMLjhO?si=tUIJuCo6RJu2IqFud4a9AQ"
  },

  {
    "albumArt" : "tmSUPERCLEANII.jpeg",
    "albumName" : "Superclean Vol. II",
    "releaseYear" : "2018",
    "topThree" : ["1. Cariño . . . . . . . . . . . . . . . . . . . . .", "2. Ruthless . . . . . . . . . . . . . . . . . . . .", "3. Clueless . . . . . . . . . . . . . . . . . . . ."],
    "streamLink" : "https://open.spotify.com/album/1Iu5sceGmML4CeQ2f5Q6aO?si=2N9O9z7SS3-DnfOeJFeAyg"
  },

  {
    "albumArt" : "tmCINEMA.jpg",
    "albumName" : "Cinema",
    "releaseYear" : "2021",
    "topThree" : ["1. Hush . . . . . . . . . . . . . . . . . . . . . .", "2. Calling U Back . . . . . . . . . . . . . . .", "3. Un Millión . . . . . . . . . . . . . . . . ."],
    "streamLink" : "https://open.spotify.com/album/5TkaDC4mYSLBvdG6UrIB0v?si=dPT8YOInSwmjQ8LMBt6Eow"
  }
];

for (var i = 0; i < jsonMariasDatabase.length; i++) {
  testingFunction(jsonMariasDatabase[i]);
}

function testingFunction (incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add("albumItem");
  newContentElement.style.backgroundColor = "#be0026";

// creating the album cover image and adding it to the div
  let newImgElement = document.createElement("DIV");
  newImgElement.classList.add("artContainer");
  newContentElement.appendChild(newImgElement);

  let newLink = document.createElement("A");
  newLink.setAttribute('href', incomingJSON['streamLink']);
  newImgElement.appendChild(newLink);

  let newImg = document.createElement("IMG");
  newImg.classList.add("art");
  newImg.src = incomingJSON['albumArt'];
  newLink.appendChild(newImg);

// creating the title and adding it to the div
  let newHeadElement = document.createElement("DIV");
  newHeadElement.classList.add("headContainer");
  newContentElement.appendChild(newHeadElement);
  let heading = document.createElement("H1");
  heading.classList.add("title");
  heading.innerText = incomingJSON['albumName'];
  // heading.style.fontFamily = tbd
  heading.style.color = "#5e0011";
  newHeadElement.appendChild(heading);

// creating the year and adding it to the div
  let newYearElement = document.createElement("DIV");
  newYearElement.classList.add("yearContainer");
  newContentElement.appendChild(newYearElement);
  let newYear = document.createElement("H2");
  newYear.classList.add("year");
  newYear.innerText = incomingJSON['releaseYear'];
  // newYear.style.fontFamily = tbd
  newYear.style.color = "#5e0011";
  newYearElement.appendChild(newYear);

// creating the top 3 songs list and adding it to the div
  let newListElement = document.createElement("DIV");
  newListElement.classList.add("listContainer");
  newContentElement.appendChild(newListElement);
  let newSongList = document.createElement("UL");
  newListElement.appendChild(newSongList);

// adding songs to the list element
  for (var i = 0; i < incomingJSON['topThree'].length; i++) {
    var currentString = incomingJSON['topThree'][i];
    var newSongItem = document.createElement("LI");
    newSongItem.innerText = currentString;
    newSongItem.style.color = "#f8f2dd";
    newSongList.appendChild(newSongItem);
  }

  contentContainer.appendChild(newContentElement);



}

// rellax = new Rellax('.heroContainer');
rellax = new Rellax('.gifContainer');
