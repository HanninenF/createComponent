export const createMyButton = (): HTMLButtonElement => {
  const buttonName = document.createElement("button");
  buttonName.classList.add("myButton");
  buttonName.textContent = "Do Not Press!";
  const myButtonContainer = document.querySelector(
    ".myButtonContainer"
  ) as HTMLButtonElement;
  myButtonContainer.appendChild(buttonName);
  return buttonName;
};
