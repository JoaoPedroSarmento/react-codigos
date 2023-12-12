import UserContext from "./contexts/UserContext";
import { useContext } from "react";

function UserInfo() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Informações do usuário</h1>
            <p>Nome: {user.name}</p>
            <p>E-mail: {user.email}</p>
        </div>
    )
}

export default UserInfo;