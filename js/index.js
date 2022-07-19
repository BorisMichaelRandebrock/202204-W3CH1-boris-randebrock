import Card from "./Card.js";
import gotCharacters from "./Got.js";

const parent = document.querySelector(".characters-list.row.list-unstyled");
gotCharacters.forEach(
  (character) => new Card(character, parent, "character col")
);

// const comunications = document.createElement("div");
// comunications.className = "comunications";
// document.body.appendChild(comunications);

// comunications.innerHTML = `
//       <p class="comunications__text display-1">Una frase que dice alguien</p>
//       <img
//       class="comunications__picture"
//       src="img/no-one.jpg"
//       alt="${character.nombre}"
//       />`;

// const comunicationsTextDisplay = document.querySelector(".comunications__text");
// const comunicationsPicture = document.querySelector(".comunications__picture");

// const joffreyButtons = () => {
//   const joffreyTalkButton = document.querySelector(".Joffrey-talk-button");
//   joffreyTalkButton.addEventListener("click", () => {
//     comunications.classList.add("on");
//     comunicationsTextDisplay.textContent = character[0].comunicar();
//     comunicationsPicture.setAttribute("src", "./img/joffrey.jpg");
//     setTimeout(() => {
//       comunications.classList.remove("on");
//     }, 2000);
//   });

//   const joffreyDeathButton = document.querySelector(".Joffrey-death-button");
//   joffreyDeathButton.addEventListener("click", () => {
//     document.querySelector(".Joffrey-picture").classList.add("rotated");
//     character[0].muere();
//     document.querySelector(
//       ".list__status0"
//     ).innerHTML = `Estado: <i class="fas fa-thumbs-down"></i>`;
//   });
// };

// const jaimeButtons = () => {
//   const jaimeTalkButton = document.querySelector(".Jaime-talk-button");
//   jaimeTalkButton.addEventListener("click", () => {
//     comunications.classList.add("on");
//     comunicationsTextDisplay.textContent = character[1].comunicar();
//     comunicationsPicture.setAttribute("src", "./img/jaime.jpg");
//     setTimeout(() => {
//       comunications.classList.remove("on");
//     }, 2000);
//   });

//   const jaimeDeathButton = document.querySelector(".Jaime-death-button");
//   jaimeDeathButton.addEventListener("click", () => {
//     document.querySelector(".Jaime-picture").classList.add("rotated");
//     character[1].muere();
//     document.querySelector(
//       ".list__status1"
//     ).innerHTML = `Estado: <i class="fas fa-thumbs-down"></i>`;
//   });
// };

// const daenerysButtons = () => {
//   const daenerysTalkButton = document.querySelector(".Daenerys-talk-button");
//   daenerysTalkButton.addEventListener("click", () => {
//     comunications.classList.add("on");
//     comunicationsTextDisplay.textContent = character[2].comunicar();
//     comunicationsPicture.setAttribute("src", "./img/daenerys.jpg");
//     setTimeout(() => {
//       comunications.classList.remove("on");
//     }, 2000);
//   });

//   const daenerysDeathButton = document.querySelector(".Daenerys-death-button");
//   daenerysDeathButton.addEventListener("click", () => {
//     document.querySelector(".Daenerys-picture").classList.add("rotated");
//     character[2].muere();
//     document.querySelector(
//       ".list__status2"
//     ).innerHTML = `Estado: <i class="fas fa-thumbs-down"></i>`;
//   });
// };

// const tyrionButtons = () => {
//   const tyrionTalkButton = document.querySelector(".Tyrion-talk-button");
//   tyrionTalkButton.addEventListener("click", () => {
//     comunications.classList.add("on");
//     comunicationsTextDisplay.textContent = character[3].comunicar();
//     comunicationsPicture.setAttribute("src", "./img/tyrion.jpg");
//     setTimeout(() => {
//       comunications.classList.remove("on");
//     }, 2000);
//   });

//   const tyrionDeathButton = document.querySelector(".Tyrion-death-button");
//   tyrionDeathButton.addEventListener("click", () => {
//     document.querySelector(".Tyrion-picture").classList.add("rotated");
//     character[3].muere();
//     document.querySelector(
//       ".list__status3"
//     ).innerHTML = `Estado: <i class="fas fa-thumbs-down"></i>`;
//   });
// };

// const bronnButtons = () => {
//   const bronnTalkButton = document.querySelector(".Bronn-talk-button");
//   bronnTalkButton.addEventListener("click", () => {
//     comunications.classList.add("on");
//     comunicationsTextDisplay.textContent = character[4].comunicar();
//     comunicationsPicture.setAttribute("src", "./img/bronn.jpg");
//     setTimeout(() => {
//       comunications.classList.remove("on");
//     }, 2000);
//   });

//   const bronnDeathButton = document.querySelector(".Bronn-death-button");
//   bronnDeathButton.addEventListener("click", () => {
//     document.querySelector(".Bronn-picture").classList.add("rotated");
//     character[4].muere();
//     document.querySelector(
//       ".list__status4"
//     ).innerHTML = `Estado: <i class="fas fa-thumbs-down"></i>`;
//   });
// };

// const activateButtons = () => {
//   joffreyButtons();
//   jaimeButtons();
//   daenerysButtons();
//   tyrionButtons();
//   bronnButtons();
// };

// activateButtons();
