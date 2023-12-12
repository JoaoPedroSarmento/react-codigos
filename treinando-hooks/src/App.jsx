/* eslint-disable no-unreachable */
import UserInfo from "./contexts/UserInfo";
import { useRef } from "react";
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
    const [user, setUser] = useState({
        nome: "",
        senha: ""
    });
    const inputNomeRef = useRef(null);
    const inputSenhaRef = useRef(null);

    return (
        <UserInfo.Provider value={user}>
            <Header />
            <br />
            <Input referencia={inputNomeRef} />
            <br />
            <br />
            <Input referencia={inputSenhaRef} />
            <br />
            <br />
            <button onClick={() => setUser({ nome: inputNomeRef.current.value, senha: inputSenhaRef.current.value })}>Atualizar</button>
        </UserInfo.Provider>
    )

}

export default App;