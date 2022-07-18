import Component from "./Component.js";
// import Personaje from "./character.js";

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

export default Card;
