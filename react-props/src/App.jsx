import Container from "./components/Container/Container";
import estilos from "./components/Container/Container.module.css";


function App() {
  return (
    <>
      <Container
        className={estilos.container}
        arial-label="container"
      >
        <h1>Lorem 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut inventore nulla.</p>
      </Container>
      <Container
        className={estilos.container}
        arial-label="container">
        <h1>Lorem 2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi inventore sit eveniet.</p>
      </Container>
      <Container
        className={estilos.container}
        arial-label="container">
        <h1>lorem 3</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nemo voluptates! Harum!</p>
      </Container>
    </>
  )
}

export default App; 