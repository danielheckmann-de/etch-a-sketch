# Etch-a-Sketch

A browser-based Etch-a-Sketch/sketch pad built with vanilla HTML, CSS, and JavaScript.

## Features

- Generates a **16×16 grid dynamically with JavaScript**.
- Uses **Flexbox** to arrange the squares.
- Does not use CSS Grid.
- Hovering over squares creates a pixelated drawing trail.
- Each interaction gives a square a randomized RGB color.
- Each subsequent interaction darkens the square by **10%**, eventually reaching black after ten interactions.
- The grid can be resized with the **Set Grid Size** button.
- Supports grid sizes from **1×1 through 100×100**.
- Keeps the drawing area at approximately **960×960 pixels** regardless of grid size.
- Uses input validation to prevent excessively large grids.

## Project Structure

```text
etch-a-sketch/
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Provides the page structure, including the resize button and the container that holds the dynamically generated grid.

### `style.css`

Handles the page layout and uses Flexbox to create the grid. The grid squares use a CSS custom property to calculate their width based on the current grid size.

### `script.js`

Creates and removes grid squares, handles mouse interactions, generates random RGB colors, progressively darkens squares, and validates requested grid sizes.

## How to Run

No build tools or dependencies are required.

1. Download or clone the repository.
2. Open `index.html` in a web browser.
3. Move your mouse across the grid to draw.
4. Click **Set Grid Size** to create a different-sized sketch pad.

## Grid Resizing

The resize prompt accepts whole numbers between **1 and 100**.

For example, entering `64` creates a **64×64 grid** containing 4,096 squares while keeping the overall drawing area at approximately 960×960 pixels.

## Technologies

- HTML5
- CSS3
- JavaScript
- Flexbox
- DOM APIs

## Learning Goals

This project practices:

- DOM manipulation
- Creating elements with JavaScript
- Event listeners
- Mouse events
- Flexbox layout
- CSS custom properties
- User input and validation
- Basic color manipulation
- Managing dynamically generated content

## License

This project is provided for learning and educational purposes.
