import Personaje from "./Character.js";

class Rey extends Personaje {
  anyosReinado;

  constructor(nombreRey, familiaRey, edadRey, anyosReinadoRey) {
    super(nombreRey, familiaRey, edadRey);
    this.anyosReinado = anyosReinadoRey;
    this.emoji = "👑";
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}
export default Rey;
