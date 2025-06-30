// Utility function to handle selection
function handleSelection(buttonsClass, selectedClass, event) {
  const buttons = document.querySelectorAll(buttonsClass); //array
  buttons.forEach((btn) => btn.classList.remove(selectedClass));
  event.target.classList.add(selectedClass);
}

// Left column (Time Periods)
const timeButtons = document.querySelectorAll(".time-button");
timeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    handleSelection(".time-button", "selected", event);
  });
});

// Right column (Geographical Areas)
const areaButtons = document.querySelectorAll(".area-button");
areaButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    handleSelection(".area-button", "selected", event);
  });
});

const spawnButton = document.querySelector(".submit-button");
const instructionWrapper = document.querySelector(".instruction-wrapper");

spawnButton.addEventListener("click", () => {
  const selectedTime = document.querySelector(".time-button.selected");
  const selectedArea = document.querySelector(".area-button.selected");

  if (selectedTime && selectedArea) {
    // Example history fact
    const fact =
      "Did you know? The Great Wall of China was built over centuries to protect against invasions.";

    // Show the fact in the instruction wrapper
    instructionWrapper.innerHTML = `<p>${fact}</p>`;
  }
});
