import { Link, useLoaderData, useParams } from "react-router-dom";
export default function Product() {
  const product = useLoaderData();
  throw new Error("Erro qualquer");
  return (
    <section>
      <Link to="/products">
        <button>VOLTAR</button>
      </Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price}</p>
      <button>Comprar</button>
    </section>
  );
}
