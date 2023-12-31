import { useState, useEffect } from "react";
function ExemploComponente() {
  const [valor, setValor] = useState(0);
  // useEffect com return para executar quando o componente for desmontado
  useEffect(() => {
    console.log("Componente montado");
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  const aumentarValor = () => {
    setValor(valor + 1);
  };

  return (
    <div>
      <p>Valor: {valor}</p>
      <button onClick={aumentarValor}>Aumentar Valor</button>
    </div>
  );
}

export default ExemploComponente;
