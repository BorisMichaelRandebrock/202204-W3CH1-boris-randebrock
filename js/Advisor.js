import Personaje from "./Character.js";

class Asesor extends Personaje {
  asesorado;

  constructor(nombreAsesor, familiaAsesor, edadAsesor, personajeAsesorado) {
    super(nombreAsesor, familiaAsesor, edadAsesor);
    if (personajeAsesorado instanceof Personaje) {
      this.asesorado = personajeAsesorado;
      this.emoji = "🎓";
    }
  }

  comunicar() {
    return `${super.comunicar()}No sé por qué, pero creo que voy a morir pronto`;
  }
}
export default Asesor;
