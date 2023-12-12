/* eslint-disable no-unused-vars */
import estilos from "./Botao.module.css";

function deletarContainer(ev) {
    const btn = ev.currentTarget;
    const container = btn.parentNode;
    document.getElementById("app").removeChild(container);
}
function Botao() {
    return (
        <button className={estilos.btn} onClick={deletarContainer}>
            Deletar container
        </button>
    )
}

export default Botao;