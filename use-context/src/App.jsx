import UserContext from "./contexts/UserContext.js"
import UserInfo from "./UserInfor.jsx";
function App() {
    const user = {
        name: 'João',
        email: 'joao@example.com',
    };

    return (
        <UserContext.Provider value={user}>
            <h1>Aplicação</h1>
            <UserInfo />
        </UserContext.Provider>
    );
}

export default App;