import { useContext } from "react";
import UserInfo from "../contexts/UserInfo";
function Header (){
   const user = useContext(UserInfo);
    return (
        <header>
            <p>Nome: {user.nome}</p>
            <p>Senha: {user.senha}</p>
        </header>
    )
}

export default Header;