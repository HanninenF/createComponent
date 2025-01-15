export const createMyButton = () => {
  const blueButton = document.createElement("button");
  blueButton.classList.add("myButton");
  blueButton.textContent = "Do Not Push!";
  const myButtonContainer = document.querySelector(
    ".myButtonContainer"
  ) as HTMLButtonElement;
  myButtonContainer.appendChild(blueButton);

  blueButton.addEventListener("click", (e) => {
    e.preventDefault();
  });
};
