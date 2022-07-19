import Rey from "./Kxing.js";
import Asesor from "./Axdvisor.js";
import Escudero from "./Sxquire.js";
import Luchador from "./Fxighter.js";

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", "7");
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", "10");
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

const gotCharacters = [joffrey, jaime, daenerys, tyrion, bronn];

export default gotCharacters;
