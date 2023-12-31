import { useRef } from "react";

export default function RefExemplo() {
  const input = useRef(null);
  const focarNoInput = () => {
    input.current.focus();
  };
  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={focarNoInput}>Focar no input</button>
    </div>
  );
}
