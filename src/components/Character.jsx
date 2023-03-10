import React from "react";
export function Character(character) {
    return (
      <div className="text-center p-5">
        <h3>{character.name}</h3>
        <img src={character.image} alt={character.name} className="img-fluid rounded-pill" />
        <p>Origen: {character.origin.name}</p>
        <p>Especie: {character.species}</p>
        <p>Estatus: {character.status}</p>
        <p>gender: {character.gender}</p>
      </div>
    );
  }
  export default Character;