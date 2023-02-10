// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Productos from "./components/Productos/Productos";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  //-------ACA SE ESCRIBE JAVASCRIPT!!!!!!!!!

  //-----------------------------------------------------------------
  return (
    // ACA VA SOLAMENTE HTML
    //Los estilos que le aplique a la clase App son estilos globales. Es equivalente al body de una pag html normal.
    <div className="App">
      <header className="App-header">
        <Navbar bienvenida={"gato"} />

     

        <h1>Hola, estoy escribiendo algo en react</h1>
      </header>
      <main>
        <p>Aca estan los productos</p>

        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
