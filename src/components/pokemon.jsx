"use client";

import React, { useState, useEffect } from "react";

export default function Pokemon() {
  const [pokemonSearch, setPokemonSearch] = useState("ditto");
  const [pokemon, setPokemon] = useState({});

  async function fetchPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`;

    const response = await fetch(url);

    const data = await response.json();
    setPokemon(data);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    fetchPokemon();
  }

  return (
    <div id="pokemon-container">
      <h3>Pokemon</h3>
      <p>Here's a pokemon api: https://pokeapi.co/api/v2/pokemon/ditto</p>
      <form onSubmit={handleSearch}>
        <p>
          You have to replace the text "ditto" with the name of the pokemon you
          want to search for.
        </p>
        <input
          type="text"
          placeholder="Enter pokemon name"
          value={pokemonSearch}
          onChange={(e) => setPokemonSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      <hr />
    </div>
  );
}
