import Rey from "./King.js";
import Asesor from "./Advisor.js";
import Escudero from "./Squire.js";
import Luchador from "./Fighter.js";

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

const characters = [joffrey, jaime, daenerys, tyrion, bronn];

export default characters;
