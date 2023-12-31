import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fecthDados } from "../functions/fetchDados.js";
import ContextProdutos from "../contexts/ContextoProdutos.jsx";
import { Helmet } from "react-helmet";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const { atualizaQuantidadeDeProdutosNoCarrinho } =
    useContext(ContextProdutos);

  useEffect(() => {
    fecthDados("http://localhost:3000/produtos")
      .then((dados) => setProdutos(dados))
      .catch((e) => console.log(e));
  }, []);

  const adicionarProdutoAoCarrinho = async ({ nome, produto, preco }) => {
    const dadosCarrinho = await fecthDados(
      "http://localhost:3000/carrinho"
    ).then((dados) => dados);
    const novoProduto = {
      id: dadosCarrinho.length + 1,
      nome,
      produto,
      preco,
    };

    await fetch("http://localhost:3000/carrinho", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoProduto),
    });
    atualizaQuantidadeDeProdutosNoCarrinho();
  };

  return (
    <>
      <Helmet>
        <title>Loja.db/home</title>
      </Helmet>
      <h2>Veja os produtos disponíveis!</h2>
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "250px",
            border: "1px solid",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            background: "#313131",
          }}
        >
          <h3>
            Número de produtos disponíveis: <span>{produtos.length}</span>
          </h3>
        </div>
      </div>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {produtos.map((produto) => (
          <div
            key={produto.id}
            style={{
              width: "250px",
              border: "1px solid",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              background: "#313131",
            }}
          >
            <h2>{produto.nome}</h2>
            <span>R$ {produto.preco}</span>
            <button onClick={() => adicionarProdutoAoCarrinho(produto)}>
              Adicionar ao carrinho
            </button>
            <Link to={`/detalhes/${produto.nome}`}>
              <button>Ver detalhes</button>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
