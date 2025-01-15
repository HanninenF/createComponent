import "./components/index.scss";
import * as Functions from "./functionIndex";

const blueButton = Functions.createMyButton();

blueButton.addEventListener("click", (e) => {
  e.preventDefault();
  const h1 = document.createElement("h1");
  h1.textContent = Functions.getMessage("You have entered the realm of Doom!");
  h1.classList.add("doomMessage");
  const doomDiv = document.querySelector(".Doom") as HTMLDivElement;
  doomDiv.appendChild(h1);
});
