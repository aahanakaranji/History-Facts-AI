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

spawnButton.addEventListener("click", async () => {
  const selectedTime = document.querySelector(".time-button.selected");
  const selectedArea = document.querySelector(".area-button.selected");

  if (selectedTime && selectedArea) {
    // Show loading message
    instructionWrapper.innerHTML = `<p>Getting your history fact...</p>`;

    const response = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        time: selectedTime.textContent.trim(),
        area: selectedArea.textContent.trim(),
      }),
    });

    const data = await response.json();
    instructionWrapper.innerHTML = `<p>${data.response}</p>`;
  }
});
