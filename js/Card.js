import Component from "./Component.js";

class Card extends Component {
  constructor(character, parent, className) {
    super(parent, "li", className);
    this.render(character);
    this.character = character;
  }

  render(character) {
    this.element.innerHTML = `
          <div class="card character__card">
            <img
              src="img/${character.nombre}.jpg"
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${
                character.nombre
              } <br>${character.familia} </h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${character.edad}</li>
                 <li class="list__status">
            Estado:
            ${
              character.vivo
                ? '<i class="fas fa-thumbs-up"></i>'
                : '<i class="fas fa-thumbs-down"></i>'
            }
          </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                    ${
                      character.constructor.name === "Rey"
                        ? `<li>Años de reinado: ${character.anyosReinado}</li>`
                        : ""
                    }
                    ${
                      character.constructor.name === "Luchador"
                        ? `<li>Arma: ${character.arma}</li>
                          <li>Destreza: ${character.destreza}</li>`
                        : ""
                    }
                    ${
                      character.constructor.name === "Asesor"
                        ? `<li>Asesora a: ${character.asesorado.nombre}</li>`
                        : ""
                    }
                    ${
                      character.constructor.name === "Escudero"
                        ? `<li>Peloteo: ${character.pelotismo}</li>
                        <li>Sirve a: ${character.sirveA.nombre}</li>`
                        : ""
                    }
                </ul>
                  <div class="character__actions">
          <button class="character__action btn ${
            character.nombre
          }-talk-button">habla</button>
          <button class="character__action btn ${
            character.nombre
          }-death-button">muere</button>
        </div>
              </div>
            </div>
              <i class="emoji">${
                character.constructor.name === "Rey" ? "👑" : ""
              }
              ${character.constructor.name === "Luchador" ? "🗡" : ""}
              ${character.constructor.name === "Asesor" ? "🎓" : ""}
              ${character.constructor.name === "Escudero" ? "🛡" : ""}</i>
          </div>
      `;
  }
}

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

export default Card;
