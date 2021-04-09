import './App.css';
import Mensaje from './Mensaje.js'
function App() {
  const mensaje ="Este es un componente con un mensaje por parametro"
  return (
    <div className="App">
      {mensaje}
      <Mensaje color="blue" text={mensaje}></Mensaje>
      <Mensaje color="red" text={mensaje}></Mensaje>
      <Mensaje color="grey" text={mensaje}></Mensaje>
    </div>
  );
}

export default App;
