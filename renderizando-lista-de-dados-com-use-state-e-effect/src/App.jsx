import { useEffect, useState } from "react";

async function fetchPecas() {
  const resposta = await fetch("http://localhost:3000/pecas");
  const dados = await resposta.json();
  return dados;
}
export default function App() {
  const [pecas, setpecas] = useState([]);
  useEffect(() => {
    fetchPecas()
      .then((dados) => setpecas(dados))
      .catch((e) => console.log(e));
  }, []);
  return (
    <ul>
      {pecas.map((peca) => (
        <li style={{ padding: "10px" }}>
          <hr />
          <p>ID: {peca.id}</p>
          <p>Nome: {peca.nome}</p>
          <p>Marca: {peca.marca}</p>
          <p>Nome: {peca.preco}</p>
        </li>
      ))}
      <hr />
    </ul>
  );
}
