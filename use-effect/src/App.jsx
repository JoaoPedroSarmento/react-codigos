import { useState, useEffect } from "react";

async function fetchPokemon() {
  const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const dados = await resposta.json();
  return dados.results;
}

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetchPokemon()
      .then((dados) => {
        setPokemon(dados);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <ul>
      {pokemon.map((pok) => (
        <li key={pok.name}>
          <span>{pok.name}</span>
          <button>
            <a href={pok.url} target="_blank" rel="noreferrer">
              Ver detalhes
            </a>
          </button>
        </li>
      ))}
    </ul>
  );
}
