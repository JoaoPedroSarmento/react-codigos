import { useRef } from "react";

export default function RefExemplo() {
    const inputRef = useRef(null);
    const focarNoInput = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focarNoInput}>Focar no input</button>
        </div>
    )
}