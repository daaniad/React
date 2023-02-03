import {useState, useEffect} from "react";
import HomeView from "./HomeView";
export default function Home() {
    const [characters, setCharacters] = useState(null);

    useEffect(function(){
        async function fetchCharacters() {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            setCharacters(data.results)
        }
        fetchCharacters();
    }, []);
  return <HomeView characters={characters}/>;
}
