import React, { useState } from "react";
import CharacterModal from "./CharacterModal";

function CharacterCard({ character }) {

  const [show, setShow] = useState(false);

  return (
    <>
      <div
        onClick={() => setShow(true)}
        style={{
          border:"1px solid black",
          margin:"10px",
          padding:"10px",
          width:"200px",
          cursor:"pointer"
        }}
      >

        <img
          src={character.images.sm} alt = "Character"
          width="150"
        />

        <h3>{character.name}</h3>

      </div>

      {show && (
        <CharacterModal
          character={character}
          close={() => setShow(false)}
        />
      )}
    </>
  );
}

export default CharacterCard;
