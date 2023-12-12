/* eslint-disable react/prop-types */
import card from "./Card.module.css"
import main from "../../estilos/main.module.css"
function Card({ src }) {
    return (
        <div className={card.card}>
            <div>
                <img src={src} className={main.poster} />
            </div>
            <div className={main["container-content-card"]}>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                    repudiandae nisi perspiciatis molestias optio doloribus eos cupiditate,
                    eum iure minima sequi! Neque?
                </p>
            </div>
        </div>
    )
}

export default Card;