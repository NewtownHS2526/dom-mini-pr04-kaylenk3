console.log("Script Running");

// Create a helper function that moves a penguin across the grid
// The function should accept a penguin element and a column position
// Only allow movement while the column is less than or equal to 6
const changePosition = (Penguin, position) => (position <= 6 ? Penguin.style.setProperty('grid-column', position) : null);


// Create position variables for each penguin and set them all to 1
let tux_position = 1;
let daisy_position = 1;
let rocky_position = 1;



// Query selectors for all buttons and penguins go here
const tuxButton = document.querySelector("#tux-button");
const tuxPenguin = document.querySelector("#tux-penguin");
const daisyButton = document.querySelector("#daisy-button");
const daisyPenguin = document.querySelector("#daisy-penguin");
const rockyButton = document.querySelector("#rocky-button");
const rockyPenguin = document.querySelector("#rocky-penguin");
const winnerBox = document.querySelector("#winner"); 


// Write the function that moves Tux forward
// Increase the tux position
// Call the helper function to update the penguin position
// Call the winner check function
const advanceTux = (e) => {
  tux_position += 1;
  changePosition(tuxPenguin, tux_position);
};


// Write the function that moves Daisy forward
const advanceDaisy = (e) => {
  daisy_position += 1;
  changePosition(daisyPenguin, daisy_position);
};


// Write the function that moves Rocky forward
const advanceRocky = (e) => {
  rocky_position += 1;
  changePosition(rockyPenguin, rocky_position);
};


// Write a function that checks if a penguin reached column 6
// If so, display the winner message (example: "Tux got the fish! 🐟")
// Disable all buttons when a winner is found
const checkWinner = (position, Penguin) => {
  if (position === 6) {
  winnerBox.innerHTML = Penguin + `got the fish!!!`
  }
};


// Add event listeners for each button
// Each button should trigger its own movement function
tuxButton.addEventListener("click", advanceTux);
daisyButton.addEventListener("click", advanceDaisy);
rockyButton.addEventListener("click", advanceRocky);