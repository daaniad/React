import { useEffect, useState } from "react";

export default function Pokemon() {
  const [newPokemon, setNewPokemon] = useState("");
  const [pokemons, setPokemon] = useState([]);

  useEffect(
    function () {
      async function fetchPokemon() {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemons}`
        );
        const details = await response.json();
        setPokemon(details);
      }
      fetchPokemon();
    },
    [pokemons]
  );

  function addNewPokemon(event) {
    setNewPokemon(event.target.value);
    //console.log(event.target.value);
  }

  function addPokemon(event) {
    event.preventDefault();

    if (newPokemon === "") {
      return;
    }
    setPokemon(newPokemon);
    setNewPokemon("");
  }

  return (
    <div className="App">
      <h1>PokeApi</h1>
      <form onSubmit={addPokemon}>
        <input value={newPokemon} onChange={addNewPokemon}></input>
        <button>Search Pokemon</button>
      </form>

      {!pokemons ? (
        <h3>No Pokemon</h3>
      ) : (
        <ul>
          <li>
            {pokemons.name}
            <img src={pokemons.sprites.front_default} alt="" />
          </li>
        </ul>
      )}
    </div>
  );
}
