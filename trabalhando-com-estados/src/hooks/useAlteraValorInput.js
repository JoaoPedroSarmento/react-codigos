import { useState } from "react";

function useAlteraValorInput() {
    const [inputValor, setInputValor] = useState("");
    const novoValor = (valor) => {
        if (!isNaN(+valor)) {
            setInputValor(valor.trim());
        }
    }

    return [inputValor, novoValor];
}

export default useAlteraValorInput;