import { useState } from "react";

function useInput() {
    const [inputValor, setInputValor] = useState("");
    const definirValorDoInput = (valor) => {
        setInputValor(valor);

    }
    return [inputValor, definirValorDoInput];
}

export { useInput };