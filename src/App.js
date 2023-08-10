import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchPokemon from "./components/SearchPokemon";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
  const [isCharging, setIsCharging] = useState(false);

  const getPokemon = async (pokemonName) => {
    setIsCharging(true);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch(function (error) {
        setPokemon(null);
        setError(error);
      });

    setIsCharging(false);
  };

  return (
    <div className="App">
      <Header />
      {!error && <SearchPokemon getPokemon={getPokemon} />}

      {isCharging && <h1>Cargando...</h1>}
      {pokemon && (
        <div className="w-full flex justify-center mt-5">
          <PokemonCard pokemonData={pokemon} />
        </div>
      )}
      {error && (
        <div className="mt-10">
          <h1 className="text-xl font-bold">Error, enter the name of a valid Pokemon</h1>
          <button onClick={() =>{
            setError(null)
          }} className="bg-[#ffde00] shadow-red-500 text-black font-bold py-2 px-2 mt-2 rounded-md hover:bg-red-400 hover:shadow-xl active:scale-90 transition duration-150">
            Try again
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
