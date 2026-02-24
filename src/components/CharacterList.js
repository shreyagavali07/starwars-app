import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => {
        setCharacters(response.data.slice(0, 50)); // first 50 only
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });

  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;
