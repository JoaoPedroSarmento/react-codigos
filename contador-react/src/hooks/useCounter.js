import { useState } from "react";
export default function useCounter(valorIncial) {
    const [count, setCount] = useState(valorIncial);

    const increment = () => {
        setCount(count + 1);
    };

    return [count, increment]; // retorna um Array 
}