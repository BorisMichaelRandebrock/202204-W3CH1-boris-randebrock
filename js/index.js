import Card from "./Card.js";
import characters from "./got.js";

const parent = document.querySelector(".characters-list.row.list-unstyled");
characters.forEach((character) => new Card(character, parent, "character col"));
