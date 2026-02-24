import React from "react";

function CharacterModal({ character, close }) {

  return (
    <div style={{
      position:"fixed",
      top:"20%",
      left:"30%",
      background:"white",
      padding:"20px",
      border:"2px solid black"
    }}>

      <h2>{character.name}</h2>

      <img src={character.images.md} width="200"/>

      <p>Full Name: {character.biography.fullName}</p>

      <p>Intelligence: {character.powerstats.intelligence}</p>

      <p>Strength: {character.powerstats.strength}</p>

      <p>Speed: {character.powerstats.speed}</p>

      <button onClick={close}>Close</button>

    </div>
  );
}

export default CharacterModal;
