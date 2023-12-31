import { useState } from "react";

export function useInputNumber(initialValue = "") {
  const [inputValor, setInputValorState] = useState(initialValue);
  const setInputValor = (valor) => {
    if (!isNaN(+valor)) {
      setInputValorState(inputValor + valor);
    } else if (valor === "Backspace") {
      setInputValorState(inputValor.slice(0, -1));
    }
  };
  return [inputValor, setInputValor];
}
