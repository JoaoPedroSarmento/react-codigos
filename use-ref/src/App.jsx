import { useRef, useState } from "react";
import RefExemplo from "./RefExemplo";

function App() {
  let variavel = 0;
  const [state, setState] = useState(0);
  const ref = useRef(0);
  const exibirValores = () => {
    alert(`
    Variável: ${variavel},
    Ref: ${ref.current},
    State: ${state}
    `)

  }
  return (
    <div>
      <h2>Conhecendo o use ref</h2>
      <RefExemplo/>
      <hr />
      <p>Váriavel: {variavel}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button onClick={() => variavel++}>Aumentar Variável</button>
      <button onClick={() => ref.current++}>Aumentar Ref</button>
      <button onClick={() => setState(state => state + 1)}>Aumentar State</button>
      <button onClick={exibirValores}>Exibir valores </button>
    </div>
  )
}
export default App;