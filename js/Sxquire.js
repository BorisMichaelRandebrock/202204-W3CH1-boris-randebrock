import Personaje from "./Cxharacter.js";
import Luchador from "./Fxighter.js";

class Escudero extends Personaje {
  sirveA;

  pelotismo;

  constructor(
    nombreEscudero,
    familiaEscudero,
    edadEscudero,
    valorPelotismo,
    personajeSirve
  ) {
    super(nombreEscudero, familiaEscudero, edadEscudero);
    this.pelotismo = this.filtrarPelotismo(valorPelotismo);
    if (personajeSirve instanceof Luchador) {
      this.sirveA = personajeSirve;
      this.emoji = "🛡";
    }
  }

  filtrarPelotismo(gradoPelotismo) {
    if (gradoPelotismo < 0) {
      return 0;
    }
    if (gradoPelotismo > 10) {
      return 10;
    }
    return this.gradoPelotismo;
  }

  comunicar() {
    return `${super.comunicar()}Soy un loser`;
  }
}
export default Escudero;
