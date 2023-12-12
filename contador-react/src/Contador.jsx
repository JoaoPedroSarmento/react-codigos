import { useState } from "react";
let contVar = 0;
function Contador() {
    const [cont, setCont] = useState(0);
    const incrimentarContVar = () => {contVar+=1; console.log(contVar)};
    const incrimentarContState = () => setCont(cont + 1);
    return (
        <div>
            <p>Variável: {contVar}</p>
            <p>State: {cont}</p>
            <button onClick={incrimentarContVar}>Aumentar valor da variável</button>
            <button onClick={incrimentarContState}>Aumentar valor do State</button>
        </div>
    )
}
export default Contador;