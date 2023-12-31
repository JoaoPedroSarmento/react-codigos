import { useContext } from "react";
import { Link } from "react-router-dom"
import ContextProdutos from "../contexts/ContextoProdutos";
export default function Header() {
  const contexto = useContext(ContextProdutos);

  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>Loja.db</h2>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">
          <button style={{ width: "100px" }}>Home</button>
        </Link>
        <Link to="/carrinho">
          <button style={{ width: "100px" }}>
            Carrinho ({contexto.qtdProdutosCarrinho})
          </button>
        </Link>
      </nav>
    </header>
  );
}
