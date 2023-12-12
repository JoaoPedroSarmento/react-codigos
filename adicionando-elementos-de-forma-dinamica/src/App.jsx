import { useState } from "react";

function App() {
  const [containers, setContainers] = useState([]);
  const addContainer = () => {
    const novoContainer = (
      <div key={containers.length}>
        <p>Container {containers.length + 1}</p>
        <button onClick={(ev) => ev.currentTarget.parentNode.remove()}>Excluir container</button>
      </div>
    )
    setContainers([...containers , novoContainer])
  }
  return (
    <section id="secao-containers">
      {containers}
      <button onClick={addContainer}>Adicionar Container</button>
    </section>
  )
}

export default App;