const playButton = document.querySelector(".play");
playButton.addEventListener("click", function() {
    const grid = document.querySelector(".grid");
    grid.classList.remove("hidden");
    generateCells(100);
})

/******/
/**
 * Dato un numero, la funzione genera elementi div con al loro interno numeri da 1 a x in successione, aggiunge loro un event listener e li inserisce nella griglia
 * @param {number}
 * @returns {none}
 */
function generateCells(number) {
  for (let i = 1; i <= number; i++) {
    cell = document.createElement("div");
    cell.classList.add(`cell-${number}`);
    cell.innerHTML = i;
    cell.addEventListener("click", whatNumber);
    grid = document.querySelector(".grid");
    grid.append(cell);
  }
}

/**
 * Funzione di callback che aggiunge la classe aqua e stampa in console il contenuto dell'elemento HTML
 * @param {none}
 * @returns {none}
 */
function whatNumber() {
    this.classList.add("aqua");
    console.log(this.innerHTML);
}
