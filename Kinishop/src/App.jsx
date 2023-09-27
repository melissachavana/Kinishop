import "./App.css";
import { Footer } from "./components/layout/footer/Footer";

import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/ItemList/ItemListContainer";
import { Home } from "./components/pages/home/Home";
import { Login } from "./components/pages/login/Login";

function App() {
  let usuario = "Melissa";

  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <ItemListContainer nombre={usuario} />
      <Footer />
    </div>
  );
}

export default App;
