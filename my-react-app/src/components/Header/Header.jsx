import Nav from "./Nav/Nav.jsx"
import "./header.css"
const nome = "React.App";
export default function Header(){
    return (
        <header>
           <h2>{nome}</h2>
             <Nav/>
        </header>
    )
}