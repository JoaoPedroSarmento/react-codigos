import TextoInput from "./hooks/TextoInput";
import { useInput } from "./hooks/useInput";

function Input() {
    const [inputValor, setInputValor] = useInput("");
    return (
        <>
            <input type="text" onChange={ev => setInputValor(ev.currentTarget.value)} />
            <TextoInput inputValor={inputValor} />
        </>
    );
}
export default Input;