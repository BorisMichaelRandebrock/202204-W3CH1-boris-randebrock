import Personaje from "./Character.js";

class Luchador extends Personaje {
  arma;
  destreza;

  constructor(
    nombreLuchador,
    familiaLuchador,
    edadLuchador,
    armaLuchador,
    valorDestreza
  ) {
    super(nombreLuchador, familiaLuchador, edadLuchador);
    this.arma = armaLuchador;
    this.destreza = this.filtraDestreza(valorDestreza);
    this.emoji = "🗡";
  }

  filtraDestreza(valorDestreza) {
    if (valorDestreza < 0) {
      return 0;
    }
    if (valorDestreza > 10) {
      return 10;
    }
    return this.valorDestreza;
  }

  comunicar() {
    return `${super.comunicar()}Primero pego y luego pregunto`;
  }
}
export default Luchador;
