import { useState } from 'react'
import './App.css'
async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
  const data = await response.json()
  return data.results;
}

function App() {
  const [pokemon, setPokemon] = useState([])
  if (!pokemon.length) {
    fetchPokemon().then(result => {
      console.log("Requisição realizada")
      console.log(result)
      setPokemon(result)
    })
  }

  return (
    <div className="app">
      <div>
        <h2>Pokémon</h2>
        <ul className="pokemon">
          {pokemon.map((pok) => (
            <li key={pok.name}>
              <span>{pok.name}</span>
              <button > <a href={pok.url} target='_blank' rel="noreferrer">Ver detalhes</a></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App