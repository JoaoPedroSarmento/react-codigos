import { useState } from "react";
import ExibeTexto from "./ExibeTexto.jsx";
export default function App() {
  const [inputValor, setInputValor] = useState("");
  return (
    <>
      <input
        type="text"
        onChange={(ev) => setInputValor(ev.currentTarget.value)}
      />
      <ExibeTexto inputValor={inputValor} />
    </>
  );
}
