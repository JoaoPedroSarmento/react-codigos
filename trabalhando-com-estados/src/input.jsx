import useAlteraValorInput from "./hooks/useAlteraValorInput";

function Input() {
    const [inputValor, setInputValor] = useAlteraValorInput();
    return (
        <>
            <input type="text" id="input" value={inputValor} onChange={(ev) => setInputValor(ev.currentTarget.value)} />
            <p>Valor do input (apenas números): {inputValor} </p>
        </>
    )
}

export { Input };