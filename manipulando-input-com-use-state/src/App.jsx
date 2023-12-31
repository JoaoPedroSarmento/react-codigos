import { useState } from "react";
export default function App() {
  const [senha, setSenha] = useState("");
  const [tamSenha, setTamSenha] = useState(8);
  const [copy, setcopy] = useState("Copiar!");
  function copiarSenha() {
    setcopy("Copiado!");
    setTimeout(() => setcopy("Copiar!"), 1000);
    navigator.clipboard.writeText(senha);
  }
  function gerarSenha() {
    const caracteres =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let novaSenha = "";
    for (let i = 0; i < tamSenha; i += 1) {
      const posicao = Math.floor(Math.random() * caracteres.length);
      novaSenha += caracteres[posicao];
    }
    setSenha(novaSenha);
  }
  return (
    <>
      <input
        type="number"
        onChange={(ev) => setTamSenha(ev.currentTarget.value)}
        min={1}
      />
      <button onClick={gerarSenha}>Gerar senha</button>
      <button onClick={copiarSenha}>{copy}</button>
      <p>Senha de {tamSenha} caracteres </p>
      <p>Senha: {senha}</p>
    </>
  );
}
