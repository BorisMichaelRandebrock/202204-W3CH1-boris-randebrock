class Personaje {
  nombre;

  familia;

  edad;

  vivo = true;

  serie = "Juego de Tronos";

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje, element) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;
    this.element = document.createElement(element);
  }

  comunicar() {
    return `${this.nombre} dice: `;
  }

  muere() {
    this.vivo = false;
  }
}
export default Personaje;
