import Rey from "./king.js";
import Asesor from "./advisor.js";
import Escudero from "./squire.js";
import Luchador from "./fighter.js";

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

const caracters = [joffrey, jaime, daenerys, tyrion, bronn];

export default caracters;