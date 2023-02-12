import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/Context/CartContext";
import CartView from "./components/CartView/CartView";
import Order from "./components/Order/Order";

function App() {
  //-------ACA SE ESCRIBE JAVASCRIPT!!!!!!!!!

  //-----------------------------------------------------------------
  return (
    // ACA VA SOLAMENTE HTML
    //Los estilos que le aplique a la clase App son estilos globales. Es equivalente al body de una pag html normal.
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartView/>} />
            <Route path="/order" element={<Order/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
