const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resize-btn");

const GRID_PIXELS = 960;
const MAX_GRID_SIZE = 100;

function randomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

function darkenSquare(square) {
  let darkness = Number(square.dataset.darkness || 0);

  // Each interaction increases darkness by 10 percentage points.
  darkness = Math.min(darkness + 10, 100);
  square.dataset.darkness = darkness;

  const baseColor = square.dataset.baseColor || randomRGB();
  square.dataset.baseColor = baseColor;

  const rgb = baseColor.match(/\d+/g).map(Number);
  const factor = 1 - darkness / 100;

  const darkened = rgb.map(value => Math.round(value * factor));
  square.style.backgroundColor = `rgb(${darkened[0]}, ${darkened[1]}, ${darkened[2]})`;
}

function createGrid(size = 16) {
  container.replaceChildren();
  container.style.setProperty("--grid-size", size);

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    // Randomize the square's starting RGB color.
    square.dataset.baseColor = randomRGB();
    square.dataset.darkness = "0";

    square.addEventListener("mouseenter", () => {
      darkenSquare(square);
    });

    fragment.appendChild(square);
  }

  container.appendChild(fragment);
}

resizeButton.addEventListener("click", () => {
  const input = prompt(
    `How many squares per side? Enter a number from 1 to ${MAX_GRID_SIZE}.`,
    "16"
  );

  if (input === null) return;

  const size = Number(input);

  if (!Number.isInteger(size) || size < 1 || size > MAX_GRID_SIZE) {
    alert(`Please enter a whole number between 1 and ${MAX_GRID_SIZE}.`);
    return;
  }

  createGrid(size);
});

createGrid();
