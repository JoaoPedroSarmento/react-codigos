import nav from "./Nav.module.css";
export default function Nav() {
    return (
        <nav>
            <a href="#" className={nav["nav-link"]}>Entrar</a>
            <a href="#" className={nav["nav-link"]}>Criar conta</a>
        </nav>
    )
}