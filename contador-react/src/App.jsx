import "./App.css";
import useCounter from "./hooks/useCounter";
function App() {
  const [count, increment] = useCounter(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>count is {count}</button>
      </div>
    </>
  );
}

export default App;