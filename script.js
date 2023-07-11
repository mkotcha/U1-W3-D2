/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  const h1 = document.querySelector("h1");
  h1.innerText = "Nuovo Titolo!";
};

/* ESERCIZIO 2
          Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
       */

const addClassToTitle = function () {
  const h1 = document.querySelector("h1");
  h1.classList.add("myHeading");
};

/* ESERCIZIO 3
          Scrivi una funzione per che cambi il testo dei p figli di un div
         */

const changePcontent = function () {
  const paragraphDiv = document.querySelectorAll("div > p");
  paragraphDiv.forEach(element => (element.innerText = "new text"));
};

/* ESERCIZIO 4
          Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
         */

const changeUrls = function () {
  const tagA = document.querySelectorAll("a:not(footer a)");
  tagA.forEach(element => (element.href = "https://www.google.com"));
};

/* ESERCIZIO 5
          Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
       */

const addToTheSecond = function () {
  const tagUl = document.querySelector("ul:nth-of-type(2)");
  const newLi = document.createElement("li");
  newLi.innerText = "4th";
  tagUl.appendChild(newLi);
};

/* ESERCIZIO 6
          Scrivi una funzione che aggiunga un secondo paragrafo al primo div
       */

// il primo div non ha paragrafi!!!

const addParagraph = function () {
  const firstDiv = document.querySelector("div");
  const newP = document.createElement("p");
  newP.innerText = "new Paragraph";
  firstDiv.appendChild(newP);
};

/* ESERCIZIO 7
          Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */

const hideFirstUl = function () {
  const tagUl = document.querySelector("ul");
  tagUl.classList.add("hidden");
};

/* ESERCIZIO 8 
          Scrivi una funzione che renda verde il background di ogni lista non ordinata
         */

const paintItGreen = function () {
  const tagUl = document.querySelectorAll("ul");
  tagUl.forEach(element => element.classList.add("greenBg"));
};

/* ESERCIZIO 9
          Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
         */

const makeItClickable = function () {
  const tagH1 = document.getElementsByTagName("h1")[0];
  tagH1.onclick = makeItClickable;
  tagH1.innerText = tagH1.innerText.slice(0, -1);
};

// const sliceH1 = function () {
//   const tagH1 = document.getElementsByTagName("h1")[0];
//   tagH1.innerText = tagH1.innerText.slice(0, -1);
// };

/* ESERCIZIO 10
          Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
         */

const revealFooterLink = function () {
  const tagA = document.querySelector("footer a");

  alert(tagA.href);
};

const makeFooterCliccable = () => {
  const tagFooter = document.querySelector("footer");
  tagFooter.onclick = revealFooterLink;
};

makeFooterCliccable();

/* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */

const generateTable = function () {
  const tableArea = document.querySelector("#tableArea");
  const tabRow = document.createElement("div");
  const tabCell0 = document.createElement("div");
  const tabCell1 = document.createElement("div");
  const tabCell2 = document.createElement("div");
  const tabCell3 = document.createElement("div");
  tabCell0.innerText = "immagine";
  tabCell1.innerText = "nome prodotto";
  tabCell2.innerText = "quantita";
  tabCell3.innerText = "prezzo";

  tabRow.appendChild(tabCell0);
  tabRow.appendChild(tabCell1);
  tabRow.appendChild(tabCell2);
  tabRow.appendChild(tabCell3);

  tabRow.classList.add("table-row");

  tableArea.appendChild(tabRow);

  const tabCells = document.querySelectorAll(".table-row div");
  tabCells.forEach((element, index) => element.classList.add("table-cell", "table-cell" + index));
};

generateTable();

/* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */

const addRow = function (link, nome, quantita, prezzo) {
  const tableArea = document.querySelector("#tableArea");
  const tabRow = document.createElement("div");
  const tabCell0 = document.createElement("div");
  const tabCell1 = document.createElement("div");
  const tabCell2 = document.createElement("div");
  const tabCell3 = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("src", link);
  //   tabCell0.innerText = "immagine";
  tabCell1.innerText = nome;
  tabCell2.innerText = quantita;
  tabCell3.innerText = prezzo;

  tabCell0.appendChild(img);
  tabRow.appendChild(tabCell0);
  tabRow.appendChild(tabCell1);
  tabRow.appendChild(tabCell2);
  tabRow.appendChild(tabCell3);

  tabRow.classList.add("table-row");

  tableArea.appendChild(tabRow);

  const tabCells = document.querySelectorAll(".table-row div");
  tabCells.forEach((element, index) => element.classList.add("table-cell", "table-cell" + index));
};

/* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */

const hideAllImages = function () {
  const tagImg = document.querySelector(".table-cell img");
  tagUl.classList.add("hidden");
};

/* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */

const changeColorWithRandom = function () {
  const tagH2 = document.querySelector("h2#changeMyColor");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  tagH2.setAttribute("style", "color: #" + randomColor);
};

const makeH2cliccable = () => {
  const tagH2 = document.querySelector("h2#changeMyColor");
  tagH2.onclick = changeColorWithRandom;
};

makeH2cliccable();

/* EXTRA ESERCIZIO 16
         Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
       */

const deleteVowels = function () {
  const allTag = document.querySelectorAll("div *, footer *");

  allTag.forEach(element => {
    console.log(element.innerText);

    element.innerText = element.innerText.replace(/[aeiou]/gi, "");
  });
};
