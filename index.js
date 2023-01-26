const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generatePalette = () => {
  //clearing the contianer
  container.innerHTML = "";

  for (let i = 0; i < maxPaletteBoxes; i++) {
    //generating random hex color codes
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    //end of random

    //   creating a new li element and inserting it into the container
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
      <span class="hex-value">${randomHex}</span>`;

    //adding click event to current li element to copy the color
    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};
generatePalette();

const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hex-value");
  navigator.clipboard.writeText(hexVal).then(() => {colorElement.innerText = "Copied";
setTimeout(() => colorElement.innerText = hexVal, 1000); }).catch(() => alert("Failed to copy the color code!"))
};
//copied stays active for only 1s 

refreshBtn.addEventListener("click", generatePalette);