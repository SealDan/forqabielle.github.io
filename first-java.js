"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount > MAX_IMAGES) {
        catImg.src = `img/cat-finite.jpg`
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "YAY! Thenks :)";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  yesButton.onclick = 
    document.querySelector('#new-button').innerHTML += `
    <a href="second.html"><button type="button" class="btn btn--yes">Continue...</button></a>
    `;
  }

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "no...",
    "Are you sure???",
    "Please...",
    "Hmmmm...",
    "By one plato basket sinii!!!",
    "Sed...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}