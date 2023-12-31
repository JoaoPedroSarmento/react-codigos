import { useContext, useEffect, useState } from "react";
import { fecthDados } from "../functions/fetchDados.js";
import { Link } from "react-router-dom";
import ContextProdutos from "../contexts/ContextoProdutos.jsx";
import { Helmet } from 'react-helmet';
export default function Carrinho() {
  const [produtos, setProdutos] = useState([]);
  const { atualizaQuantidadeDeProdutosNoCarrinho } =
    useContext(ContextProdutos);
  useEffect(() => {
    fecthDados("http://localhost:3000/carrinho")
      .then((dados) => setProdutos(dados))
      .catch((e) => console.log(e));
  }, []);
  const removerProdutoDoCarrinho = async (id) => {
    await fetch(`http://localhost:3000/carrinho/${id}`, {
      method: "DELETE",
    });
    fecthDados("http://localhost:3000/carrinho")
      .then((dados) => setProdutos(dados))
      .catch((e) => console.log(e));
    atualizaQuantidadeDeProdutosNoCarrinho();
  };
  return (
    <>
      <Helmet>
        <title>Loja.db/carrinho</title>
      </Helmet>
      <h2>Produtos adicionados ao carrinho: </h2>
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
            <h2> {produto.nome} </h2>
            <span>R$ {produto.preco}</span>
            <Link to={`/detalhes/${produto.nome}`}>
              <button>Ver detalhes</button>
            </Link>
            <button onClick={() => removerProdutoDoCarrinho(produto.id)}>
              Remover produto do carrinho
            </button>
          </div>
        ))}
      </section>
    </>
  );
}
