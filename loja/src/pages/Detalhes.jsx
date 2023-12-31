import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fecthDados } from "../functions/fetchDados.js";
import ContextProdutos from "../contexts/ContextoProdutos.jsx";
import { Helmet } from "react-helmet";
export default function Detalhes() {
  const { produtoNome } = useParams();
  const [produto, setProduto] = useState({});
  const { atualizaQuantidadeDeProdutosNoCarrinho } =
    useContext(ContextProdutos);
  useEffect(() => {
    fecthDados("http://localhost:3000/produtos")
      .then((produtos) =>
        setProduto(
          produtos.filter((produto) => produto.nome === produtoNome)[0]
        )
      )
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
        <title>{`Loja.db/detalhes/${produto.nome?.toLowerCase()}`}</title>
      </Helmet>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h2>Nome: {produto.nome}</h2>
        <p>Preço: {produto.preco}</p>
        <p>Detalhes do produto: {produto.detalhes}</p>
        <button onClick={() => adicionarProdutoAoCarrinho(produto)}>
          Adicionar ao carrinho
        </button>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </div>
    </>
  );
}
