import Card from "./Card.js";
import gotCharacters from "./got.js";

const parent = document.querySelector(".characters-list.row.list-unstyled");
gotCharacters.forEach(
  (character) => new Card(character, parent, "character col")
);
