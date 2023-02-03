import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CharacterDetailView from "./CharacterDetailView";

export default function CharacterDetail() {
  const { id } = useParams(); //Lo llamamos id porque en App.jsx el path lo llamamos ":id"
  const [character, setCharacter] = useState(null);

  useEffect(function () {
    async function fetchCharacter() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setCharacter(data);
    }
    fetchCharacter();
  }, []);
  return <CharacterDetailView character={character} />;
}
