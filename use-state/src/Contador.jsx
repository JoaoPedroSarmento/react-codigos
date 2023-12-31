import { useState } from "react";
let contVar = 0;
export default function Contador() {
  const [contState, setCont] = useState(0);
  function incrementaVar() {
    contVar++;
  }
  function incrementarState(){
    setCont(contState + 1);
  }
  return (
    <div>
      <p>Contador var {contVar}</p>
      <p>Contador state {contState}</p>
      <button onClick={incrementaVar}>Incrementar var</button>
      <button onClick={incrementarState}>Incrementar State</button>
    </div>
  );
}

