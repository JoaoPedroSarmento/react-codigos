import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";
import Main from "../components/Main.jsx";
import ContextProdutos from "../contexts/ContextoProdutos.jsx";
import { useState, useEffect } from "react";
import { fecthDados } from "../functions/fetchDados.js";
export default function LayoutPage() {
  const [qtdProdutosCarrinho, setQtdProdutosCarrinho] = useState(0);
  useEffect(() => {
    fecthDados("http://localhost:3000/carrinho").then((dados) =>
      setQtdProdutosCarrinho(dados.length)
    );
  }, []);
  const atualizaQuantidadeDeProdutosNoCarrinho = () => {
    fecthDados("http://localhost:3000/carrinho").then((dados) =>
      setQtdProdutosCarrinho(dados.length)
    );
  };
  return (
    <>
      <ContextProdutos.Provider
        value={{
          atualizaQuantidadeDeProdutosNoCarrinho,
          qtdProdutosCarrinho,
        }}
      >
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </ContextProdutos.Provider>
    </>
  );
}
