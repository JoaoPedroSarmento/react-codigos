/* eslint-disable react/prop-types */
import Botao from "../Botao/Botao.jsx";
function Container(props) {
    return (
        <div {...props}>
            {props.children}
            <Botao />
        </div>
    )
}

export default Container;

