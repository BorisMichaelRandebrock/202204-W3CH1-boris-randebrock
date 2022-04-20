import Component from "./Component.js";
// import Personaje from "./character.js";

class Card extends Component {
  constructor(character, parent, className) {
    super(parent, "li", className);
    // this.element = document.createElement("li");
    // this.element.className = className;
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
              <h2 class="character__name card-title h4">${character.nombre} <br>${character.familia} </h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${character.edad}</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: Xx</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
       
      `;
  }
}
export default Card;
